# React + TypeScript + Vite

Esta plantilla proporciona una configuración mínima para hacer funcionar React en Vite con HMR (Hot Module Replacement) y algunas reglas de ESLint.

## Comenzando

1. Clona el repositorio:

```bash
git clone https://github.com/Alexis12vloq/RetoAttlaris.git
cd retoattlaris
```

2. Instala las dependencias:

```bash
npm install
```

3. Inicia el servidor de desarrollo:

```bash
npm run dev
```

Esto iniciará Vite y tu aplicación React con HMR habilitado.

## Construcción para Producción

Para construir tu aplicación para producción, ejecuta:

```bash
npm run build
```

Este comando realizará la compilación de TypeScript y creará un build listo para producción.

## Linting

Realiza el linting de tu código TypeScript y React con ESLint:

```bash
npm run lint
```

## Vista Previa

Para previsualizar la versión de producción localmente, ejecuta:

```bash
npm run preview
```

## Configuración de ESLint

Si estás desarrollando una aplicación para producción, recomendamos actualizar la configuración de ESLint para habilitar reglas de linting conscientes del tipo. Sigue estos pasos:

1. Configura la propiedad `parserOptions` en tu archivo `.eslintrc.js`:

```js
module.exports = {
  // otras reglas...
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
    project: ["./tsconfig.json", "./tsconfig.node.json"],
    tsconfigRootDir: __dirname,
  },
};
```

2. Sustituye `plugin:@typescript-eslint/recommended` con `plugin:@typescript-eslint/recommended-type-checked` o `plugin:@typescript-eslint/strict-type-checked`.

3. Opcionalmente, añade `plugin:@typescript-eslint/stylistic-type-checked`.

4. Instala [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) y añade `plugin:react/recommended` & `plugin:react/jsx-runtime` a la lista de `extends`.

## Dependencias

Este proyecto utiliza las siguientes dependencias:

- **React**: `^18.2.0`
- **React DOM**: `^18.2.0`
- **Vite**: `^5.0.8`
- **TypeScript**: `^5.2.2`
- **ESLint**: `^8.55.0`

Además, hay dependencias adicionales para estilos y componentes de interfaz de usuario:

- **@emotion/react**: `^11.11.1`
- **@emotion/styled**: `^11.11.0`
- **@fontsource/roboto**: `^5.0.8`
- **@material-ui/icons**: `^4.11.3`
- **@mui/icons-material**: `^5.15.1`
- **@mui/material**: `^5.15.1`
- **@mui/styled-engine-sc**: `^6.0.0-alpha.9`
- **@mui/x-data-grid**: `^6.18.6`
- **styled-components**: `^6.1.3`

## Contribuciones

Siéntete libre de contribuir a este proyecto abriendo problemas, enviando solicitudes de extracción o sugiriendo mejoras.

## Licencia

Este proyecto está bajo la [Licencia MIT](LICENSE).
