# sb-ex

An assignment : 
You can search a policy using input in navbar. It can search by Client Name and Policy Number.

## Install dependencies
sudo npm install -g yarn (if you don't have yarn)

Windows user fix powershell Error > Set-ExecutionPolicy -Scope CurrentUser -ExecutionPolicy Unrestricted

yarn

## Run dev server

yarn start

## Build

yarn build

## Plunker Link
https://plnkr.co/plunk/9bp5NOCvPdb3tldQ

## Update Notes

###### v0.6.0

- Created Project
- Created README.md
- Created package.json
- Created src/index.html
- Created build folder
- Added .gitignore
- Ignored build folder
- Ignored node_modules folder
- Installed react and react-dom packages
- Created yarn.lock
- Updated README.md
- Updated package.json
- Installed typescript, @types/react, @types/react-dom packages
- Installed @babel/core, @babel/preset-env, @babel/preset-react, @babel/preset-typescript packages
- Installed webpack, webpack-cli, webpack-dev-server, html-webpack-pluging packages
- Installed babel-loader
- Created .babelrc
- Created tsconfig.json
- Created src/App.tsx and src/index.tsx
- Created webpack/webpack.config.js
- Updated .gitignore, package.json and yarn.lock
- Created src/style.css and imported App.tsx
- Installed css-loader, style-loader and added webpack config
- Update Webpack Config: Added css-loader, style-loader, image, font
- Created declarations.d.ts for png and svg format
- Created webpack.common.js, webpack.dev.js, webpack.prod.js in webpack folder
- Installed webpack-merge
- Updated webpack.config
- Created Counter.tsx for testing react-refresh package
- Installed @pmmmwh/react-refresh-webpack-plugin, react-refresh
- Updated webpack/webpack.dev.js, package.json
- Installed eslint, eslint-plugin-react eslint-plugin-react-hooks, @typescript-eslint/parser, @typescript-eslint/eslint-plugin
- Installed eslint-config-prettier eslint-plugin-prettier, eslint-plugin-eslint-comments

  Test O.K :white_check_mark:

###### v1.0.0
- Updated README.md
- Deleted Counter.tsx and test enviroments(test.png and test-chekmark.svg)
- Created Components and their styles (Navbar, Search, PolicyItem, PolicyList)
- Added Responsive Feature to Mobile Devices using SCSS 
- Added SCSS Variable to change color
- Added New Font (Family: Triomphe)
- Added icons (icon-phone.svg, icon-policy.svg, icon-search.svg)

  Test O.K :white_check_mark:

###### v1.0.2
- Updated README.md 
- Added new feature to Search Component: Searching policy not case sensetive now
- Added new feature to PolicyList Component: A message appears when no policy found.

  Test O.K :white_check_mark:

###### v1.0.3
- Updated README.md 
- Apple device border bottom radius problem fixed
- Search Input resized to Mobile Device

  Test O.K :white_check_mark:
