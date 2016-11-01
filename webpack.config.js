module.exports = {
  devtool: 'cheap-module-eval-source-map',
  entry: './src/index.js',
  output: {
    path: __dirname + '/public',
    filename: 'index.js',
  },
  module: {
    preLoaders: [
      {
        test: /\.js$/,
        loader: 'eslint-loader',
        exclude: /node_modules|public/,
      },
    ],
    loaders: [
      {
        test: /\.js$/,
        exclude: /(node_modules|public)/,
        loader: 'babel',
        query: {
          presets: ['react', 'es2015'],
          plugins: ['transform-object-rest-spread', 'transform-es2015-destructuring'],
        },
      },
    ],
  },
  devServer: { 'hide-modules': true },
  eslint: {
    configFile: '.eslintrc.yml',
  },
};
