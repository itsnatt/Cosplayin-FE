import React, { ReactNode } from 'react'
import NavBar from './Header/Navbar/Navbar'
import Footer from './Footer/Footer'

type Props = {
    children: ReactNode
    noFooter?: boolean
}
const Layout = ({ children, noFooter = false  }: Props) => {
    return (
        <>
            <NavBar />
            {children}
            {noFooter ? null : <Footer />}
        </>
    )
}

export default Layout