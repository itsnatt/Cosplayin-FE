import React, { ReactNode } from 'react'
import NavBar from './Header/Navbar/Navbar'
import Footer from './Footer/Footer'

type Props = {
    children: ReactNode
}
const Layout = ({ children }: Props) => {
    return (
        <>
            <NavBar />
            {children}
            <Footer />
        </>
    )
}

export default Layout