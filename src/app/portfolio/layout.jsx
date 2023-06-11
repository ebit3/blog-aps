import React from 'react'
import Style from './page.module.css';

const Layout = ({ children }) => {
    return (
        <div>
            <h1 className={Style.mainTitle}>Our Works</h1>
            {children}
        </div>
    )
}

export default Layout