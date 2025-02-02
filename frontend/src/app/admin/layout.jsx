import React from 'react'
import AdminNavbar from './Navbar';

const Layout = ({ children }) => {
    return (
        <div>
            <AdminNavbar />
            {children}
        </div>
    )
}

export default Layout;