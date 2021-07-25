import chalk from 'chalk'
import path from 'path'
import { clearDir, exConsole } from './utils'

import buildConfig from './config'
import webpackConfigMain from './webpack.config'
import buildCommon from './build-common'

async function buildMain() {
  return buildCommon({ webpackConfig: webpackConfigMain}).then(() => {
    exConsole.success(`[Main Complete] : ${chalk.magenta.underline(path.resolve(buildConfig.build, 'main'))}`)
  })
}

function build() {
  const { build } = buildConfig
  exConsole.info(chalk.cyanBright(`[Clear Electron Dir...] : ${chalk.magenta.underline(buildConfig.build)}`))

  try {
    clearDir(build, false, true)
  } catch (error) {
    exConsole.warn(error.message)
  }

  exConsole.info(`[Building Elctron Main...] : ${process.env.NODE_ENV}`)

  Promise.all([buildMain()])
    .then(() => {
      
    })
    .catch((err) => {
      throw new Error(err)
    })
}

build()
