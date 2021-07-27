import webpack, { Configuration } from 'webpack'

interface BuildConfig {
  webpackConfig: Configuration
}

function build({ webpackConfig }: BuildConfig): Promise<void> {
  return new Promise((resolve, reject) => {
    webpack(webpackConfig, (err, stats) => {
      if (err) throw err
      if (!stats) throw new Error('Webpack states error!')

      process.stdout.write(
        stats.toString({
          colors: true,
          hash: true,
          version: true,
          timings: true,
          assets: true,
          chunks: false,
          children: false,
          modules: false,
        }) + '\n\n'
      )

      if (stats.hasErrors()) {
        reject(stats)
      } else {
        resolve()
      }
    })
  })
}

export default build
