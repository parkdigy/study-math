const path = require('path');

const isProduction = process.env.NODE_ENV === 'production';

const options = {
  mode: isProduction ? 'production' : 'development',
  target: 'node',
  entry: {
    main: './src/app.ts',
  },
  resolve: {
    extensions: ['.js', '.ts'],
  },
  stats: isProduction,
  output: {
    path: path.join(__dirname, isProduction ? 'dist' : '@dev'),
    filename: 'app.js',
  },
  externals: {
    express: 'commonjs express',
  },
  experiments: {
    topLevelAwait: true,
  },
  module: {
    rules: [
      {
        test: /\.(ts)$/,
        include: path.resolve(__dirname, 'src'),
        exclude: /node_modules/,
        use: [
          {
            loader: 'ts-loader',
            options: {
              transpileOnly: true,
              experimentalWatchApi: true,
              allowTsInNodeModules: true,
            },
          },
        ],
      },
    ],
  },
};

module.exports = options;
