import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layouts/Layout";
import Login from "../Components/Login";
import Register from './../Components/Register';

const Routs = createBrowserRouter([
    {
        path:"/",
        element:<Layout/>,
        children:[
            {

                
            }
        ]
    },
    {
        path:'/login',
        element:<Login/>
   },
   {
       path:"/register",
       element:<Register/>
   }
])
export default Routs;