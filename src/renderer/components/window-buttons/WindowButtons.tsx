import { Modal } from 'antd';
import { useState } from 'react'
import './WindowButtons.less'
import { ipcRenderer } from 'electron';

export interface WindowButtonsProps{
    maximize?: boolean;
    iconColor?: string;
    closeConfirm?: boolean;
}
interface SvgIconProps{
    color?:string
}
const MinimizeIcon:React.FC<SvgIconProps> = ({color="white"})=> (
    <svg fill={color} viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="13089" width="12" height="12"><path d="M936.96 552.96H87.04c-19.968 0-35.84-15.872-35.84-35.84v-10.24c0-19.968 15.872-35.84 35.84-35.84h849.92c19.968 0 35.84 15.872 35.84 35.84v10.24c0 19.968-15.872 35.84-35.84 35.84z" p-id="13090"></path></svg>
)
const MaximizeIcon:React.FC<SvgIconProps> = ({color="white"})=> (
    <svg fill={color} viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="6069" width="12" height="12"><path d="M900 962H124c-34.314-0.144-62.044-28.024-62-62.34V124.34C61.956 90.024 89.686 62.144 124 62h776c34.314 0.144 62.044 28.024 62 62.34v775.32c0.044 34.316-27.686 62.196-62 62.34zM157.188 866.528h709.626V157.472H157.188v709.056z" p-id="6070"></path></svg>
)
const ResumeIcon:React.FC<SvgIconProps> = ({color="white"})=> (
    <svg fill={color} viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="6212" width="12" height="12"><path d="M905.76 62H320.46c-31.06 0-56.24 25.18-56.24 56.24v112.52h-146C87.168 230.772 62 255.948 62 287v618.74c-0.012 31.06 25.16 56.248 56.22 56.26H737c31.072 0 56.26-25.188 56.26-56.26v-146.8h112.5c31.06 0 56.24-25.18 56.24-56.24V118.26c0.012-31.06-25.16-56.248-56.22-56.26h-0.02z m-194.92 635.67v187.912H138.24V313h572.6v384.67z m180.794-12.08H785.08V290.856c-0.01-29.498-23.896-53.406-53.358-53.406H336.664V130.618h555.114l-0.144 554.972z" p-id="6213"></path></svg>
)
const CloseIcon:React.FC<SvgIconProps> = ({color="white"})=> (
    <svg fill={color} viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="8583" width="12" height="12"><path d="M521.694 449.297L111.41 39.014a51.2 51.2 0 1 0-72.43 72.363l410.282 410.317L38.98 932.01a51.2 51.2 0 1 0 72.397 72.396l410.317-410.282 410.317 410.282a51.2 51.2 0 1 0 72.396-72.362L594.125 521.694l410.282-410.283a51.2 51.2 0 1 0-72.396-72.397L521.728 449.297z" p-id="8584"></path></svg>
)

export const WindowButtons: React.FC<WindowButtonsProps> = (props = { maximize: false,closeConfirm:true }) => {
    const [winMaximize, setMaxmize] = useState<boolean>(false);
    const close = () => {
        if (props.closeConfirm) {
            Modal.confirm({
                title: 'Confirm',
                content: 'Are you sure you want to Exit?',
                centered: true,
                onOk: () => {
                    ipcRenderer.send('window-close');
                }
            })
        }
        else {
            ipcRenderer.send('window-close');
        }
    }
    const minimize=() => { ipcRenderer.send('window-minimize') }
    const maximize = () => {
        ipcRenderer.send('window-maximize');
    }
    const unMaximize = () => {
        ipcRenderer.send('window-unmaximize');
    }
    ipcRenderer.on('window-maximized', () => {
        setMaxmize(true);
    })
    ipcRenderer.on('window-unmaximized', () => {
        setMaxmize(false);
    })
    return (
        <div className="win-btns-wrapper" color="white">
            <div className="win-btn win-btn-normal" onClick={minimize}>
                <MinimizeIcon color={props.iconColor}/>
            </div>
            <div className="win-btn win-btn-normal" onClick={winMaximize ? unMaximize : maximize}>
                {winMaximize ? <ResumeIcon color={props.iconColor}/> : <MaximizeIcon color={props.iconColor}/>}
            </div>
            <div className="win-btn win-btn-close" onClick={close}>
                <CloseIcon color={props.iconColor}/>
            </div>
        </div>
    )
}