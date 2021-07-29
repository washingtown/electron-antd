import React, { useState } from 'react'
import { Button, Card } from 'antd';

export const NewWindow: React.FC<{}> = (props) => {
    const createConfig: CreateConfig = {
        showSidebar: false
    };
    return (
        <Card>
            <div>
                <h1>New Window</h1>

                <p>Demo for opening a new window</p>

                <Button type="primary" onClick={()=>{$tools.createWindow("Counter",{createConfig})}}>Show</Button>
            </div>
        </Card>
    )
}