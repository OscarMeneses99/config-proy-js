### Configuración de un Proyecto en JavaScript

## Instalación de Standard y Prettier

```bash
npm i standard prettier eslint-config-prettier prettier-config-standard -D -E
```

Crea un archivo _*.eslintrc.json*_ y copia lo siguiente:

```json
{
  "extends": ["./node_modules/standard/eslintrc.json", "prettier"]
}
```

Crea un archivo _*.prettierrc.json*_ y copia lo siguiente:

```json
"prettier-config-standard"
```

## Configuración de lint-staged

```bash
npm i lint-staged -D -E
```

Crea un archivo _*.lintstagerc*_ y copia lo siguiente:

```json
{
  "*/**/*.{js,jsx,ts,tsx}": ["prettier --write", "standard --fix", "standard"],
  "*/**/*.{json,css,md}": ["prettier --write"]
}
```

Copia la carpeta scripts y pegala en src de tu aplicación.

En el archivo package.json copia los siguientes scripts:

```json
  "scripts": {
    "version": "node src/scripts/update-version.mjs",
    "commit": "node src/scripts/commit.mjs"
  }
```

[!warning][Si usas Typescript incluye el path de los archivos en tsconfig.json en la sección de include]

Por ejemplo:

```json
{
  "include": [
    "next-env.d.ts",
    "**/*.ts",
    "**/*.tsx",
    ".next/types/**/*.ts",
    "src/scripts/update-version.mjs",  // <---
    "src/scripts/commit.mjs"  // <---
  ]
}
```
