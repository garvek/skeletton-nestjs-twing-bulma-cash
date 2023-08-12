const path = require('path');

module.exports = {
    entry: './assets/js/main.js',
    output: {
        path: path.resolve(__dirname, 'public/dist'),
        filename: 'app.js',
    },
    module: {
      rules: [
        {
          test: /\.css$/,
          use: [
            { 
              loader: 'style-loader'
            },
            { 
              loader: 'css-loader', options: { modules: true } 
            },
          ]
        },
      ],
    },
};
