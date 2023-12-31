import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Assignment from "../pages/Assignment/Assignment";
import Home from "../pages/Home";
import ErrorPage from "../pages/ErrorPage";
import CreateAssignment from "../pages/CreateAssignment/CreateAssignment";
import PrivateRoute from "./PrivateRoute";
 import UpdateAssignment from "../pages/AllAssignment/UpdateAssignment";
import ViewAssignment from "../pages/Assignment/ViewAssignment";
import MyAssignment from "../pages/MyAssignment/MyAssignment";

const router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout></MainLayout>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
                loader: ()=> fetch('https://study-group-server.vercel.app/feature')

            },
            {
             path: '/allAssignment',
             element: <Assignment></Assignment>,
             loader: ()=> fetch('https://study-group-server.vercel.app/assignmentCount') 
            },
            {
             path: 'allAssignment/view/:id',
             element: <PrivateRoute><ViewAssignment></ViewAssignment></PrivateRoute>,
             loader: ({params})=> fetch(`https://study-group-server.vercel.app/create-assignment/${params.id}`),
            
            },
            {
             path: '/myAssignment',
             element:  <PrivateRoute><MyAssignment></MyAssignment></PrivateRoute>
            },
            {
             path: '/allAssignment/updateAssignment/:id',
             element:  <UpdateAssignment></UpdateAssignment>,
             loader: ({params})=> fetch(`https://study-group-server.vercel.app/create-assignment/${params.id}`)
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