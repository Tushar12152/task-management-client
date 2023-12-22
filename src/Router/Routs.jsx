import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layouts/Layout";
import Login from "../Components/Login";
import Register from './../Components/Register';
import Home from "../Pages/Home";
import Dashboard from "../Dashboard/Dashboard";
import CreateTask from "../Dashboard/CreateTask";

import TodoTableList from "../Dashboard/TodoTableList";
import OngoingTable from "../Dashboard/OngoingTable";
import CompletedTable from "../Dashboard/completedTable";
import Previous from "../Dashboard/Previous";
import Profile from "../Dashboard/Profile";

const Routs = createBrowserRouter([
    {
        path:"/",
        element:<Layout/>,
        children:[
            {
                path:'/',
                element:<Home/>
                
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
   },
   {
    path:'/dashboard',
    element:<Dashboard/>,
    children:[
        {
            path:'/dashboard/createTask',
            element:<CreateTask/>
        },
        {
            path:'/dashboard/todo',
            element:<TodoTableList/>
        },
        {
            path:'/dashboard/ongoing',
            element:<OngoingTable/>
        },
        {
            path:'/dashboard/complete',
            element:<CompletedTable/>
        },
        {
            path:'/dashboard/previous',
            element:<Previous/>
        },
        {
             path:'/dashboard/Profile',
             element:<Profile/>
        }
    ]
   }
])
export default Routs;