import HomePage from "../pages/HomePage/HomePage"
import AdoptPage from "../pages/AdoptPage/AdoptPage";
import Layout from "../components/Layout/Layout";

/*
    The "routes" folder is typically where we centralize
    the definitions of the routes, especially as our 
    application grows more complex.
 */

// "appRoutes.js" is intended for "Route configuration"
/* 
    Define our application routes as an ARRAY OF OBJESCTS.
    This makes our routing logic reusable and easier to
    manage, rather than having a very long "App.jsx" with
    many <Route> Components
*/

const appRoutes = [
    {
        path: '/', // This is the URL path for this route.
        element: <Layout><HomePage /></Layout> // This is the React Component to render when this path is active.
        // We could add other properties here like, exact:true,
        // or meta data like, name:"Home",
    },
    {
        path: '/adopt',
        element: <Layout><AdoptPage /></Layout>
        // name:"Adopt"
    }
    // Add more OBJECTS as our application expands.
    // e.g. Example of a "dynamic route":
    //{
    //  path: '/kitten/:id',
    //  element: <KittenDetailPage />
    //}
];

export default appRoutes