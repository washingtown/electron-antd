import React, { useState } from 'react'
import { Button, Card } from 'antd';

export const Counter: React.FC<{}> = (props) => {
    const [currentCount, setCurrentCount] = useState(0);
    return (
        <Card>
            <div>
                <h1>Counter</h1>

                <p>This is a simple example of a React component.</p>

                <p aria-live="polite">Current count: <strong>{currentCount}</strong></p>

                <Button type="primary" onClick={()=>{setCurrentCount(currentCount+1)}}>Increment</Button>
            </div>
        </Card>
    )
}