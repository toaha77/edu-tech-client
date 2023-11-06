import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Assignment from "../pages/Assignment/Assignment";
import Home from "../pages/Home";
import ErrorPage from "../pages/ErrorPage";
import CreateAssignment from "../pages/CreateAssignment/CreateAssignment";
import PrivateRoute from "./PrivateRoute";
// import AllAssignment from "../pages/AllAssignment/AllAssignment";
import UpdateAssignment from "../pages/AllAssignment/UpdateAssignment";

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
             path: '/allAssignment',
             element: <Assignment></Assignment> 
            },
            // {
            //  path: '/allAssignment',
            //  element:  <AllAssignment></AllAssignment>
            // },
            {
             path: '/allAssignment/updateAssignment/:id',
             element:  <UpdateAssignment></UpdateAssignment>,
             loader: ({params})=> fetch(`http://localhost:5000/create-assignment/${params.id}`)
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