import { createBrowserRouter } from "react-router-dom";
import Root from "../Components/Root/Root";
import Home from "../Pages/Home/Home";
import Services from "../Pages/Services/Services";
import Login from "../Pages/Login/Login";
import { SiGnome } from "react-icons/si";
import SignUp from "../Pages/SignUp/SignUp";
import AddService from "../Pages/AddService/AddService";
import ManageService from "../Pages/ManageService/ManageService";
import BookedService from "../Pages/BookedService/BookedService";
import ServiceToDo from "../Pages/ServiceToDo/ServiceToDo";
import ServicesDetails from "../Pages/ServicesDetails/ServicesDetails";
import PrivateRoutes from "../PrivateRoutes/PrivateRoutes";
import UpdateManage from "../Pages/ManageService/UpdateManage/UpdateManage";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Root></Root>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/services',
                element: <Services></Services>
            },
            {
                path: '/services_details/:id',
                element: <PrivateRoutes><ServicesDetails></ServicesDetails></PrivateRoutes>,
                loader: ({ params }) => fetch(`http://localhost:5000/service_details/${params.id}`)
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
                loader: ({params}) => fetch(`http://localhost:5000/update_services/${params.id}`)
               
            },
            {
                path: '/booked_service',
                element: <PrivateRoutes><BookedService></BookedService></PrivateRoutes>
            },
            {
                path: 'service_to_do',
                element: <PrivateRoutes><ServiceToDo></ServiceToDo></PrivateRoutes>
                
            }
        ]
    }
])


export default router