import path from 'path'
import { Configuration } from 'webpack';
import WebpackBar from 'webpackbar';
import buildConfig from './config'

const { NODE_ENV } = process.env
const { build, mainSource: appPath } = buildConfig
const webpackConfig: Configuration = {
  mode: NODE_ENV as 'development' | 'production',

  node: {
    __dirname: false,
    __filename: false,
  },

  resolve: {
    alias: {
      '@src': path.resolve(__dirname, '../src'),
    },
    extensions: ['.ts', '.tsx', '.js', '.jsx'],
  },
  target: 'electron-main',

  entry: {
    main: path.join(appPath, 'index.ts'),
  },

  output: {
    path: build,
    filename: '[name].js',
    chunkFilename: '[name].js',
  },

  module: {
    rules: [
      {
        test: /(?<!\.d)\.ts$/,
        use: ['ts-loader', 'eslint-loader'],
        exclude: /node_modules/,
      },
    ],
  },

  plugins: [
    new WebpackBar({ name: 'Main    ', color: '#799AFE' }),
  ]
}

if (NODE_ENV === 'development') {
  webpackConfig.devtool = 'source-map'
} else if (NODE_ENV === 'production') {
  
}

export default webpackConfig
