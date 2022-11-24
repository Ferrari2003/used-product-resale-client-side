import Main from "../../LayOut/Main";
import Home from "../../Pages/Home/Home/Home";
import Login from "../../Pages/Login/Login";
import MainHome from "../../Pages/MainHome/MainHome";
import SignIn from "../../Pages/SignIn/SignIn";

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
                }
               
            ]
          }
    ])