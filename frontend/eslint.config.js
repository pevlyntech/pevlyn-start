import js from '@eslint/js'
import globals from 'globals'
import react from 'eslint-plugin-react'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'

/**
 * Configuración plana de ESLint para la landing.
 *
 * Solo se analiza `src/` —el código de la app— y los archivos de
 * configuración de la raíz de `frontend/`, que corren en Node.
 *
 * El proyecto no usa PropTypes ni TypeScript: la forma de los datos la fija
 * `src/data/`, así que `react/prop-types` quedaría pidiendo validaciones que
 * aquí no aportan nada. El resto de reglas se deja como viene.
 */
export default [
  { ignores: ['dist/**', 'node_modules/**'] },

  // Código de la aplicación: navegador, JSX, React 19 y hooks.
  {
    files: ['src/**/*.{js,jsx}'],
    languageOptions: {
      ecmaVersion: 2023,
      sourceType: 'module',
      globals: globals.browser,
      parserOptions: {
        ecmaFeatures: { jsx: true },
      },
    },
    settings: {
      react: { version: 'detect' },
    },
    plugins: {
      react,
      'react-hooks': reactHooks,
    },
    rules: {
      ...js.configs.recommended.rules,
      ...react.configs.flat.recommended.rules,
      // React 19 no necesita importar React para usar JSX.
      ...react.configs.flat['jsx-runtime'].rules,
      ...reactHooks.configs['recommended-latest'].rules,
      'react/prop-types': 'off',
    },
  },

  // Fast refresh: solo en los directorios de componentes.
  //
  // `src/lib/` son módulos de utilidades, no de componentes: el router expone
  // a propósito su provider, su <Link> y sus hooks juntos (ver README), y
  // partirlo para contentar a una regla de recarga en caliente dejaría la
  // forma del módulo peor de lo que está.
  {
    files: ['src/{components,pages,sections}/**/*.jsx'],
    plugins: { 'react-refresh': reactRefresh },
    rules: reactRefresh.configs.vite.rules,
  },

  // Configuración de build: corre en Node, no en el navegador.
  {
    files: ['*.config.js'],
    languageOptions: {
      ecmaVersion: 2023,
      sourceType: 'module',
      globals: globals.node,
    },
    rules: js.configs.recommended.rules,
  },
]
