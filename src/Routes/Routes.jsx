import { createBrowserRouter } from "react-router-dom";
import Root from "../Components/Root/Root";
import Home from "../Pages/Home/Home";
import Services from "../Pages/Services/Services";
import Login from "../Pages/Login/Login";
import { SiGnome } from "react-icons/si";
import SignUp from "../Pages/SignUp/SignUp";
import AddService from "../Pages/AddService/AddService";
import ManageService from "../Pages/ManageService/ManageService";
import ServiceToDo from "../Pages/ServiceToDo/ServiceToDo";
import ServicesDetails from "../Pages/ServicesDetails/ServicesDetails";
import PrivateRoutes from "../PrivateRoutes/PrivateRoutes";
import UpdateManage from "../Pages/ManageService/UpdateManage/UpdateManage";
import HomeCardDetails from "../Pages/Home/HomeCardDetails";
import Contact from "../Pages/Contact/Contact";
import AboutUs from "../Pages/AboutUs/AboutUs";
import PurchaseService from "../Pages/PurchaseService/PurchaseService";
import ErrorPage from "./ErrorPage/ErrorPage";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Root></Root>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/details/:id',
                element: <PrivateRoutes><HomeCardDetails></HomeCardDetails></PrivateRoutes>,
                loader: ({ params }) => fetch(`${import.meta.env.VITE_API_URL}/detail/${params.id}`)

            },
            {
                path: '/services',
                element: <Services></Services>,
                loader: () => fetch('http://localhost:5000/service_count')
            },
            {
                path: '/services_details/:id',
                element: <PrivateRoutes><ServicesDetails></ServicesDetails></PrivateRoutes>,
                loader: ({ params }) => fetch(`${import.meta.env.VITE_API_URL}/service_details/${params.id}`)
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/sign_up',
                element: <SignUp></SignUp>
            },
            {
                path: '/add_service',
                element: <PrivateRoutes><AddService></AddService></PrivateRoutes>
            },
            {
                path: '/manage_service',
                element: <PrivateRoutes><ManageService></ManageService></PrivateRoutes>
            },
            {
                path: '/update_manage/:id',
                element: <PrivateRoutes><UpdateManage></UpdateManage></PrivateRoutes>,
                loader: ({ params }) => fetch(`${import.meta.env.VITE_API_URL}/update_services/${params.id}`)

            },
            {
                path: '/booked_service',
                element: <PrivateRoutes><PurchaseService></PurchaseService></PrivateRoutes>
            },
            {
                path: '/service_to_do',
                element: <PrivateRoutes><ServiceToDo></ServiceToDo></PrivateRoutes>

            },
            {
                path: '/contect',
                element: <Contact></Contact>
            },
            {
                path: '/about_us',
                element: <AboutUs></AboutUs>
            }
        ]
    }
])


export default router