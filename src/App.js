import React, { lazy, Suspense, useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";

import Header from "./components/Header";
import Footer from "./components/Footer";
import Body from "./components/Body";
import Contact from './components/Contact';
import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu";
import UserContext from "./utils/UserContext";
import { Provider } from "react-redux";
import appStore from "./utils/appStore";
import Cart from "./components/Cart";

const Grocery = lazy(()=>import("./components/Grocery"))

const About = lazy(()=>import("./components/About"))

const AppLayout = () => {

    const[userName, setUserName] = useState();

    useEffect(()=>{
        const data = {
            name:"Sanket"
        }
        setUserName(data.name);
    },[])

    return(
        <Provider store={appStore}>
            <UserContext.Provider value={{loggedIn:userName, setUserName}}>
                <div className="app">
                    <Header/>
                    <Outlet/>
                    <Footer/>
                </div>
            </UserContext.Provider>
        </Provider>
    )
}

const appRouter = createBrowserRouter([
    {
        path:'/',
        element:<AppLayout/>,
        children:[
            {
                path:'/',
                element: <Body/>
            },
            {
                path:'/about',
                element: <Suspense fallback={<h1>Loading...</h1>}><About/> </Suspense>    
            },
            {
                path:'/contact',
                element: <Contact/>  
            },
            {
                path:'/grocery',
                element: <Suspense fallback={<h1>Loading...</h1>}><Grocery/> </Suspense> 
            },
            {
                path:'/cart',
                element: <Cart/>
            },
            {
                path:'/restaurants/:resId',
                element: <RestaurantMenu/>
            }
        ],
        errorElement: <Error/>   
    },
])

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<RouterProvider router={appRouter}/>);