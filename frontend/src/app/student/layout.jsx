import React from 'react'
import StudentNavbar from './StudentNavbar'

const Layout = ({ children }) => {
    return (
        <div>
            <StudentNavbar />
            {children}</div>
    )
}

export default Layout;