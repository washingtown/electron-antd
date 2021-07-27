import React, { useState } from 'react';
import ProLayout, {
    MenuDataItem,
    BasicLayoutProps as ProLayoutProps,
} from '@ant-design/pro-layout';
import { BasicLayoutSettings } from '../config/BasicLayoutProps';
import { Link } from 'react-router-dom';
import DefaultMenus from './_defaultMenus';
import { IconMap } from '../utils/IconMap';
import './BasicLayout.less'
import { WindowButtons } from '../components/window-buttons/WindowButtons';
import antdIcon from '../images/antd.svg';

interface BasicLayoutProps extends ProLayoutProps {
}

const loopMenuItem = (menus: MenuDataItem[]): MenuDataItem[] =>
    menus.map(({ icon, children, ...item }) => ({
        ...item,
        icon: icon && IconMap[icon as string],
        children: children && loopMenuItem(children),
    }));

export const BasicLayout: React.FC<BasicLayoutProps> = (props) => {
    const [pathname, setPathname] = useState('/home');
    const menuItemRender = (item: MenuDataItem, dom: React.ReactNode) => (
        <Link
            to={item.path as string}
            onClick={() => {
                setPathname(item.path || '/home');
              }}
        >
            {dom}
        </Link>
    )
    
    return (
        <div
            id="basic-layout"
            style={{
                height: '100vh',
            }}
        >
            <ProLayout
                logo={antdIcon}
                style={{
                    height: '100vh',
                }}
                location={{
                    pathname
                }}
                menuDataRender={() => loopMenuItem(DefaultMenus)}
                menuItemRender={menuItemRender}
                rightContentRender={(props) => (
                    <div className="right-up">
                        <WindowButtons closeConfirm={true}/>
                    </div>
                )}
                {...BasicLayoutSettings}

            >
                {props.children}
            </ProLayout>
        </div>
    )
}