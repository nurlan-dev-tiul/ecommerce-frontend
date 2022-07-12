import React from 'react';
import { Outlet } from 'react-router-dom';
import { AdminHeader } from './Header'
import { AdminSidebar } from './Sidebar';

export const AdminLayout = () => {
    return (
        <>
            <AdminHeader />
            <AdminSidebar />
            <Outlet />
        </>
    )
}