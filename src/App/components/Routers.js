import { lazy } from 'react'; 
const Home = lazy(() => import('./Home'));
const About = lazy(() => import('./About'));
const Contact = lazy(() => import('./Contact'));

const routers = [
    {
        path: "/",
        Component: Home,
        key: 'home'
    },
    {
        path: "/about",
        Component: About,
        key: 'about'

    },
    {
        path: "/contact",
        Component: Contact,
        key: 'contact'

    }
]

export default routers;
