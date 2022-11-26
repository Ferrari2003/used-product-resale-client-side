
import Main from "../../LayOut/Main";
import CategoryCollection from "../../Pages/CategoryCollection/CategoryCollection";

import Dashboard from "../../Pages/Dashboard/Dashboard/Dashboard";
import Blog from "../../Pages/Home/Blog/Blog";

import Home from "../../Pages/Home/Home/Home";
import Login from "../../Pages/Login/Login";
import About from "../../Pages/Shared/About/About";
import SignIn from "../../Pages/SignIn/SignIn";
import PrivateRoutes from "./PrivateRoutes/PrivateRoutes";

const { createBrowserRouter } = require("react-router-dom");

export const router = createBrowserRouter([
          {
            path:'/',
            element:<Main></Main>,
            children:[
                
                {
                    path:'/',
                    element:<Home></Home>,
                    loader:()=> fetch('http://localhost:8000/')
                },
                {
                    path:'/category/:id',
                    element:<CategoryCollection></CategoryCollection>,
                    loader:({params}) => fetch(`http://localhost:8000/category/${params.id}`)
                },
                {
                    path:'/login',
                    element:<Login></Login>,
                   
                },
                {
                    path:'/signIn',
                    element:<SignIn></SignIn>
                },
                {
                    path:'/about',
                    element:<About></About>
                },
                {
                    path:'/blog',
                    element:<Blog></Blog>
                }            
            ]
          },
          {
            path:'/dashboard',
            element:<PrivateRoutes><Dashboard></Dashboard></PrivateRoutes>
          }
    ])