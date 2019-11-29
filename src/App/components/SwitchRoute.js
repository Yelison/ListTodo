import React, { lazy, Suspense } from 'react';
import { Route, Switch, BrowserRouter as Router, } from 'react-router-dom';
import Nav from './Nav';
import routers from './Routers';

const SwitchRoute = () => {
    return (
        <Suspense fallback={<p>Loagind..</p>}>
            <Router>
                <div>
                    <Nav />
                    <Switch>
                        {routers.map(({path, Component, key})=>

                            (
                                <Route key={key} path={path} exact>
                                    <Component />
                                </Route>
                            )
                        )
                        }
                    </Switch>
                </div>
            </Router>
        </Suspense>
    )
}

export default SwitchRoute;