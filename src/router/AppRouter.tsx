import React from 'react'
import { HashRouter, Redirect, Route, Switch } from 'react-router-dom'
import { BasicLayout } from '../layouts/BasicLayout'
import { Counter } from '../pages/Counter'
import { LocalFile } from '../pages/LocalFile';
import { Home } from '../pages/Home'

export const AppRouter:React.FC=()=>{
    return (
        //Do not use BrowserRouter here, otherwise resources can't be loaded.
        <HashRouter basename={'/'}>
            <Switch>
                <Route path='/'>
                    <BasicLayout>
                        <Route path="/home" component={Home}/>
                        <Route path="/example/counter" component={Counter} />
                        <Route path="/example/files" component={LocalFile}/>
                        <Redirect to="/home"></Redirect>
                    </BasicLayout>
                </Route>
                <Redirect to="/home"></Redirect>
            </Switch>
        </HashRouter>
    )
}