import { Button, Card, Input, List } from 'antd';
import React, { useState } from 'react';
var {promises} = window.require('fs');
export const LocalFile: React.FC = () => {
    const [currentDir, setCurrentDir] = useState<string>("./");
    const [contents, setContents] = useState<string[]>([]);
    const onBtnClick = async () => {
        let files = await promises.readdir(currentDir);
        setContents(files);
    }
    return (
        <Card>
            <Input value={currentDir} onChange={(e)=>{setCurrentDir(e.target.value)}}></Input>
            <Button type="primary" onClick={onBtnClick}>Show Files</Button>
            <List size="small" dataSource={contents} renderItem={(item) => { return <List.Item>{item}</List.Item>}} />
        </Card>
    )
}