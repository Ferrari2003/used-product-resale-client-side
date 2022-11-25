import Main from "../../LayOut/Main";
import Dashboard from "../../Pages/Dashboard/Dashboard/Dashboard";
import Blog from "../../Pages/Home/Blog/Blog";
import Home from "../../Pages/Home/Home/Home";
import Login from "../../Pages/Login/Login";
import MainHome from "../../Pages/MainHome/MainHome";
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
                    element:<MainHome></MainHome>
                },
                {
                    path:'/home',
                    element:<Home></Home>
                },
                {
                    path:'/login',
                    element:<Login></Login>
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