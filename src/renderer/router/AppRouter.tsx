import React from 'react'
import { HashRouter, Redirect, Route, Switch } from 'react-router-dom'
import { BasicLayout } from '../layouts/BasicLayout'
import routers from './auto-routes';
import * as pageResource from '../pages/page-resourecs';

function createRoute(routeConfig: RouteConfig, key: RouterKey): JSX.Element | void {
    const { path, redirect} = routeConfig
    if (redirect) {
        return <Redirect {...redirect} />
    } else {
        const resource = pageResource[key]
        if (!resource) return
        return <Route path={path} component={resource} />;
    }
}

export const AppRouter: React.FC = () => {
    console.log(window.location.href);
    const routerElements = [...routers.entries()].map(([key, routeConfig]) => createRoute(routeConfig, key));
    // routerElements.push(
    //     <Redirect to="/home"></Redirect>
    // )
    console.log(routerElements);
    return (
        //Do not use BrowserRouter here, otherwise resources can't be loaded.
        <HashRouter basename={'/'}>
            <Switch>
                <Route path='/'>
                    <BasicLayout>
                        {routerElements}
                    </BasicLayout>
                </Route>
                <Redirect to="/home"></Redirect>
            </Switch>
        </HashRouter>
    )
}