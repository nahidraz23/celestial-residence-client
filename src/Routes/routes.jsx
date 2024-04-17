import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import MainLayout from '../MainLayout/MainLayout';
import Home from '../Components/Home/Home';
import UpdateProfile from '../Components/UpdateProfile/UpdateProfile';
import UserProfile from '../Components/UserProfile/UserProfile';
import Login from '../Components/Login/Login';
import Register from '../Components/Register/Register';
import PrivateRoute from '../PrivateRoute/PrivateRoute';
import FacilityDetails from '../Components/FacilityDetails/FacilityDetails';
import ErrorElement from '../Components/ErrorElement/ErrorElement';
import Bookings from '../Components/Bookings/Bookings';

const routes = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout></MainLayout>,
        errorElement: <ErrorElement></ErrorElement>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/update-profile',
                element:
                    <PrivateRoute>
                        <UpdateProfile></UpdateProfile>
                    </PrivateRoute>
            },
            {
                path: '/user-profile',
                element:
                    <PrivateRoute>
                        <UserProfile></UserProfile>
                    </PrivateRoute>
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
                path: '/facilityDetails/:id',
                element:
                    <PrivateRoute>
                        <FacilityDetails></FacilityDetails>
                    </PrivateRoute>,
                loader: () => fetch('https://nahidraz23.github.io/JSON_Data/property_details.json')
            },
            {
                path: '/booking',
                element:
                    <PrivateRoute>
                        <Bookings></Bookings>
                    </PrivateRoute>
            }
        ]
    }
])

export default routes;