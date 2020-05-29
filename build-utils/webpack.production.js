const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = () => {
  return {
    output: {
      filename: '[chunkhash].js'
    },
    plugins: [new MiniCssExtractPlugin()],
    module: {
      rules: [
        {
          test: /\.scss$/,
          use: [
            MiniCssExtractPlugin.loader,
            { loader: 'css-loader' },
            'sass-loader'
          ]
        }
      ]
    }
  };
};
