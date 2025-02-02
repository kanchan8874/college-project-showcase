import React from 'react'
import StudentNavbar from './Navbar'

const Layout = ({ children }) => {
    return (
        <div>
            <StudentNavbar />
            {children}</div>
    )
}

export default Layout;