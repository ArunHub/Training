package.json
npm install required modules
config
webpack prod, dev, common -> configure it
create vendor.ts
src/ -> main.js
scr/app
create src/index.html
give div#root
create RootComponent.jsx in src/app
connect above component from main.js using reactDom
babelrc. - >tsconfig
webpack.config.js
write custom npm scripts to start the server 



=======================
REDUX
    - create store and configure reducers and middlewares
    - Define the action types in a separate module
    - create feature wise actions and dispatch  them with the respective payloads 
    - create feature wise reducers and handle the dispatched actions respectively.
    - create a module/.js file which will combine the multiple reducers
    - expose the redux store to the react application using <Provider /> from react-redux-module
    - 

=====
