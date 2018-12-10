const path = require('path');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

module.exports = {
    mode: 'production',
    entry: {
        bitboxlight: './src/bitboxlight.ts'
    },
    output: {
        filename: '[name].min.js',
        path: path.resolve(__dirname, 'dist'),
        libraryTarget: "umd"
    },
    module: {
        rules: [
            {
                test: /\.ts$/,
                use: [{
                    loader: 'ts-loader',
                    options: {
                        transpileOnly: true
                    }
                }],
            }, {
                test: /\.js$/,
                use: [{
                    loader: 'ts-loader',
                    options: {
                        transpileOnly: true
                    }
                }],
            }, 
        ],
    },
    externals: {},
    resolve: {
        extensions: [ '.ts', '.js' ]
    },
    optimization: {
        minimizer: [new UglifyJsPlugin({
            uglifyOptions: {
                mangle: {
                    keep_fnames: true,
                    reserved: [ "BigInteger", "ECPair", "Point"],
                }
            }
        })]
    },
};
