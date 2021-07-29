import React from 'react';
import ReactDOM from 'react-dom';
import zhCN from 'antd/lib/locale/zh_CN';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { ConfigProvider } from 'antd';
import { initRenderer } from '@src/core/renderer.init';
import { ipcRenderer } from 'electron';
import CreateContext from './contexts/create-context';

initRenderer();

ipcRenderer.on('dom-ready', (_, createConfig) => {
  ReactDOM.render(
    <ConfigProvider locale={zhCN}>
      <CreateContext.Provider value={createConfig}>
        <App/>
      </CreateContext.Provider>
    </ConfigProvider>,
    document.getElementById('root')
  );
  console.log(window.location.href)
})



// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
