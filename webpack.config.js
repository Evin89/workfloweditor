var path = require('path');

// module.exports = {
//     entry: './src/js/main.js',
//     output: {
//         path: path.resolve(__dirname, 'dist'),
//         filename: 'main.bundle.js'
//     }
// };

module.exports = (env = {}) => {
    return {
        entry: ['./src/js/main.js', './src/sass/main.scss'],
        output: {
            filename: 'dist/js/main.bundle.js',
        },
        module: {
            rules: [
                {
                    test: /\.scss$/,
                    use: [
                        {
                            loader: 'file-loader',
                            options: {
                                name: '[name].css',
                                outputPath: 'dist/css/'
                            }
                        },
                        {
                            loader: 'extract-loader'
                        },
                        {
                            loader: 'css-loader'
                        },
                        {
                            loader: 'postcss-loader'
                        },
                        {
                            loader: 'sass-loader'
                        }
                    ]
                }
            ]
        }
    }
};