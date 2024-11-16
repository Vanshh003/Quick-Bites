import React, { lazy, Suspense, useState, useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import Header from './components/Header';
import Body from './components/Body';
import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom';
import Contact from './components/Contact';
import Error from './components/Error';
import RestaurantMenu from './components/RestaurantMenu';
import UserContext from './utils/UserContext';
import { Provider } from 'react-redux';
import appStore from './utils/appStore';
import Cart from './components/Cart';
import { Toaster } from 'react-hot-toast';
import Login from './components/Login';




// to optimise the app, you have to  break down the app into smaller logical chunks.. this process is called

// Chunking
// Code Splitting
// Dynamic Loading
// Lazy Loading
// On Demand Loading
// Dynamic Bundling 
// Dynamic Import


const Grocery = lazy(() => import('./components/Grocery'));
const About = lazy(() => import('./components/About'));


const AppLayout = () => {

    // authentication
    const [userName, setUserName] = useState();

    useEffect(() => {
        // make an API call and send username and password
        const data = {
            name: "Vansh",
        };
        setUserName(data.name);
    }, []);


    return (
        <Provider store={appStore}>
        
            <UserContext.Provider value={{ loggedInuser: userName, setUserName }}> 
                <div>
                    <Toaster 
                        position='top-right'
                        toastOptions={{
                            success: {
                                theme: {
                                    primary: '#4aed88',
                                },
                            },
                        }}
                    />
                </div>

                <div className="app">
                    <Header />

                    {/* if path = "/"  ... then render ... <Body /> */}
                    {/* if path = "/about"  ... then render ... <About /> */}      
                    {/* if path = /contact  ... then render ... <Contact /> */}

                        
                    {/* this outlet will be filled with the children acording to the path */}

                    <Outlet />

                </div>
            </UserContext.Provider>
        </Provider>
        
        
    );
};

// the information that will tell the browserRouter that what will happen on a specific route/path... 
// a list of paths (an object) will be passed
const appRouter = createBrowserRouter([
    {
        // if my path is "/" then load the home page... i.e. appLayout compoent
        path: "/",             
        element: <AppLayout />,

        // children is a list of paths
        children: [
            {
                path: "/restaurants",
                element: <Body />,
            }, 
            // {
            //     path: "/about",
            //     element: <About />,
            // },
            {
                path: "/about",
                element: <Suspense fallback={<h1>Loading...</h1>}><About /></Suspense>,
            },
            {
                path: "/contact",
                element: <Contact />,
            },
            {
                path: "/grocery",
                element: <Suspense fallback={<h1>Loading...</h1>}><Grocery /></Suspense>,
            },
            {
                path: "/restaurants/:resID",
                element: <RestaurantMenu />,
            },
            {
                path: "/cart",
                element: <Cart />,
            },
            {
                path: "/login",
                element: <Login />,
            },
        ],

        errorElement: <Error />,    // if the path has some error it will catch it and will show you the error page
    },
]);



const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);