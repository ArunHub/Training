((global) => {
    System.config({
        map: {
            app: 'app',
            'plugin-babel': 'node_modules/systemjs-plugin-babel/plugin-babel.js',
            'systemjs-babel-build': 'node_modules/systemjs-plugin-babel/systemjs-babel-browser.js'
        },
        transpiler: 'plugin-babel',
        packages: {
            app: {
                main: './main.js',
                defaultExtension: 'js'
            }
        }
    })
})(this);