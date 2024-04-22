import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/home";
import User from "../pages/user";

const routes = createBrowserRouter([
    {
        path:'/',
        element:<App />,
        children:[
            {
                path:'home',
                element:<Home />,
            },{
                path:'user',
                element: <User />
            }
        ]
    }
])

export default routes;