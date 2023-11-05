import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Assignment from "../pages/Assignment/Assignment";
import Home from "../pages/Home";
import ErrorPage from "../pages/ErrorPage";
import CreateAssignment from "../pages/CreateAssignment/CreateAssignment";
import PrivateRoute from "./PrivateRoute";

const router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout></MainLayout>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
                loader: ()=> fetch('http://localhost:5000/feature')

            },
            {
             path: '/assignment',
             element: <Assignment></Assignment> 
            },
            {
             path: '/create-assignment',
             element: <PrivateRoute><CreateAssignment></CreateAssignment></PrivateRoute>
            }
        ]
    },
    {
        path: 'login',
        element: <Login />
    },
    {
        path: 'register',
        element: <Register />
    }

])

export default router