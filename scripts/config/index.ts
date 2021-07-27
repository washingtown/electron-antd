import path from 'path'
const rootPath = process.cwd()
const config = {
  mainSource: path.resolve(rootPath, './src/main'),
  build: path.resolve(rootPath, './build/electron'),
}

export default config
