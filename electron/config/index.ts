import path from 'path'
const rootPath = process.cwd()
const config = {
  mainSource: path.resolve(rootPath, './electron/main'),
  build: path.resolve(rootPath, './build/electron'),
}

export default config
