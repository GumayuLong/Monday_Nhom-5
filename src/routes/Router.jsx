import React from 'react';
import { useRoutes } from "react-router-dom";
import HomeLayout from '../layouts/HomeLayout/HomeLayout';
import AdminLayout from '../layouts/AdminLayout/AdminLayout';

export default function Router() {
    const routing = useRoutes([
        {
            path: "/",
            element: <HomeLayout />
        },
        {
            path: "/admin",
            element: <AdminLayout />
        }
    ])
    return routing;
}
