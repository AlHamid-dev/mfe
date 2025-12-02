const { merge } = require('webpack-merge')
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin')
const commonConfig = require('./webpack.common')
const packageJson = require('../package.json')

const devConfig = {
    mode: 'development',
    output:{
        publicPath: "http://localhost:8080/"
    },
    devServer: {
        port: 8080,
        // historyApiFallback: {
        //     index: 'index.html'
        // }
        historyApiFallback: true,
    },
    plugins: [
        new ModuleFederationPlugin({
            // conventionally setting name for host is good practice but not functionally necessary
            name: 'container',
            remotes: {
                // then name 'marketing' in the value matches with the name in the remote app module federation plugin
                marketingPage: 'marketing@http://localhost:8081/remoteEntry.js',
                authPage: 'auth@http://localhost:8082/remoteEntry.js'
            },
            shared: packageJson.dependencies,
        }),
        
    ]
}

module.exports = merge(commonConfig, devConfig)