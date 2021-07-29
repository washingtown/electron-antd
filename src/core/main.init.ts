import * as tools from './tools'

export async function initMain(): Promise<void> {
  return new Promise(async (resolve) => {
    global.__$tools = tools
    resolve()
  })
}
