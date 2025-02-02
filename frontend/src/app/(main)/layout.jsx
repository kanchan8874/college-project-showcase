import React from 'react'
import MainNavbar from './Navbar'

const Layout = ({ children }) => {
    return (
        <div>
            <MainNavbar />
            {children}</div>
    )
}

export default Layout;