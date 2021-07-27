import React from 'react';
import { Button, Result } from 'antd';
import antdIcon from '../images/antd.svg';
import electronIcon from '../images/electron.svg';
import craIcon from '../images/cra.svg';
const { shell } = window.require('electron')

const openUrl = (url: string) => {
    shell.openExternal(url);
}
export const Home: React.FC<{}> = (props) => {

    return (
        <Result
            status="success"
            title="Electron-Antd Build Successfully!"
            subTitle="This is a Electron app build by Electron, Creat-React-App and Ant Design."
            extra={[
                <div>Powered by</div>,
                <Button
                    type="link"
                    icon={<img height="100%" src={electronIcon} alt=""/>}
                    onClick={() => { openUrl("https://www.electronjs.org/") }}
                >
                    Electron
                </Button>,
                <Button
                    type="link"
                    icon={<img height="100%" src={antdIcon} alt=""/>}
                    onClick={() => { openUrl("https://ant.design/") }}
                >
                    Ant-Design
                </Button>,
                <Button
                    type="link"
                    icon={<img height="100%" src={craIcon} alt=""/>}
                    onClick={() => { openUrl("https://create-react-app.dev/") }}
                >
                    Create React App
                </Button>
            ]}
        />
    )
}