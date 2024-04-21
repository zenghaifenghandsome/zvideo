import { createHashRouter } from "react-router-dom";
import Home from "../pages/home";

const routes = createHashRouter([
    {
        path:'/',
        element:<Home />,
    }
])

export default routes;