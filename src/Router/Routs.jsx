import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layouts/Layout";

const Routs = createBrowserRouter([
    {
        path:"/",
        element:<Layout/>,
        children:[
            {
                 
            }
        ]
    }
])
export default Routs;