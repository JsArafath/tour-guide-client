import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import AddService from "../Pages/AddService/AddService";
import Blogs from "../Pages/Blogs/Blogs";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import MyReviews from "../Pages/Reviews/MyReviews";
import Register from "../Pages/Register/Register";
import ServiceDetails from "../Pages/Services/ServiceDetails";
import Services from "../Pages/Services/Services";
import PrivateRoute from "./PrivateRoute";




const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/home',
                element: <Home></Home>
            },
            {
                path: '/services',
                element: <Services></Services>
            },
            {
                path: '/addservice',
                element: <AddService></AddService>
            },
            {
                path: '/services/:id',
                element: <ServiceDetails></ServiceDetails>,
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            },
            {
                path: '/my-reviews',
                element: <PrivateRoute><MyReviews></MyReviews></PrivateRoute>
            },
            {
                path: '/add-service',
                element: <PrivateRoute><AddService></AddService></PrivateRoute>
            },
            {
                path: '/blog',
                element: <Blogs></Blogs>
            },
          
        ]
    }
])
export default router;