import fs from 'fs';
import electron from 'electron'
declare global {
    //Typing of window.require
    interface Window {
      require(moduleSpecifier: 'fs'): typeof fs;
      require(moduleSpecifier: 'electron'): typeof electron;
    }
  }