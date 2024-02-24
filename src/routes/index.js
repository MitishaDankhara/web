import { Navigate, createBrowserRouter } from "react-router-dom";
import SignUp from "../form/signup";
import Login from "../form/login/login";
import Home from "../app/home";
import Default from "./default";
import Api from "../app/api";


const router = createBrowserRouter([
    {
        path: '/',
        element: localStorage.getItem('loggedIn') === 'true' ? <Navigate to="/home" /> : <SignUp />
    },
    {
        path: '/login',
        element: localStorage.getItem('loggedIn') === 'true' ? <Navigate to="/home" /> : <Login />,
    },
    {
        path: '/',
        element: localStorage.getItem('loggedIn') === 'true' ? <Default /> : <Navigate to="/login" />,
        children: [
            {
                path: "/api",
                element: <Api />
            },
            {
                path: '/home',
                element: <Home />
            }
        ]
    },

])

export default router;