# React
=========================
Steps to create React App
- create react folder
- create package.json
    > npm init -y
- npm install required modules for building react app with bootstrap framework
    > npm i --save react react-dom jquery popper.js bootstrap bootswatch
    - then below code for development dependencies
        >  "devDependencies": {
                "babel-core": "6.26.3",
                "babel-loader": "7.1.5",
                "babel-plugin-transform-object-rest-spread": "^6.26.0",
                "babel-preset-env": "1.7.0",
                "babel-preset-react": "6.24.1",
                "css-loader": "1.0.0",
                "file-loader": "1.1.11",
                "html-loader": "0.5.5",
                "html-webpack-plugin": "3.2.0",
                "mini-css-extract-plugin": "0.4.1",
                "optimize-css-assets-webpack-plugin": "5.0.0",
                "rimraf": "2.6.2",
                "style-loader": "^0.23.1",
                "uglifyjs-webpack-plugin": "1.2.7",
                "url-loader": "^1.1.2",
                "webpack": "4.16.5",
                "webpack-cli": "3.1.0",
                "webpack-dev-server": "3.1.5",
                "webpack-merge": "4.1.4"
            }
    - now give npm i
- create config folder root directory and create webpack.common.js, webpack.dev.js, webpack.prod.js inside and configure common things in webpack.common.js 
    * https://gist.github.com/ArunHub/77464ea7305a6096eb28d4676bc329f7
- create vendor.ts which will be useful for entry point and production build
    * https://gist.github.com/ArunHub/77464ea7305a6096eb28d4676bc329f7
- create src/ -> main.js
- create src/app folder
- create src/index.html and insert div element with id "root"
- create RootComponent.jsx in src/app
    * https://gist.github.com/ArunHub/77464ea7305a6096eb28d4676bc329f7
- connect RootComponent.jsx from main.js using reactDom
    * https://gist.github.com/ArunHub/77464ea7305a6096eb28d4676bc329f7
- create .babelrc which is similar to tsconfig and 
    > {
            "presets": [
                "env",
                "react"
            ],
            "plugins": [
                "transform-object-rest-spread"
            ]
        }
    - this plugin "transform-object-rest-spread" used to convert rest and spread operators which is not available from babel-core package.
- webpack.config.js in root directory
    > module.exports = require('./config/webpack.dev');
- write custom npm scripts to start the server. Use below commands under scripts property in package.json
    * "start": "webpack-dev-server --mode development --hot"
    * "build": "rimraf dist && webpack --config ./config/webpack.prod.js --mode production"


# REDUX
=======================
- create store folder and create store.js
- configure reducers and middlewares
- Define the action folder and create action-types and event-types in a separate folder
- create feature wise actions and dispatch them with the respective payloads 
- create feature wise reducers and handle the dispatched actions respectively.
- create a root-reducer.js file which will combine the multiple reducers using combineReducers function from store
- expose the redux store to the react application using <Provider /> from react-redux-module
    * https://gist.github.com/ArunHub/77464ea7305a6096eb28d4676bc329f7

# Help
======

- 