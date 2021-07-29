import { remote } from 'electron'

export function initRenderer(): void {
  global.__$tools = remote.getGlobal('__$tools');
}
