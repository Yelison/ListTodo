import React, { lazy, Suspense } from 'react';
import ButtonBackground from '../src/App/components/buttonBackground';
import { Route, Switch, BrowserRouter as Router, } from 'react-router-dom';
import Nav from './App/components/Nav';


const Home = lazy(() => import(`./App/components/Home`));
const About = lazy(() => import(`./App/components/About`));
const Contact = lazy(() => import(`./App/components/Contact`));


const App = () => (

    <Suspense fallback={<p>Loagind..</p>}>
        <Router>
            <div>

                <Nav />

                <Switch>
                    
                <Route path="/" exact>
                    <Home />
                </Route>
                <Route path="/about" >
                    <About />
                </Route>
                <Route path="/contact" >
                    <Contact />
                </Route>
                </Switch>
            </div>
        </Router>

    </Suspense>

);
export default App;
