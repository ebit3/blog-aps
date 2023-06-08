"use client"
import Link from 'next/link'
import React from 'react'
import Style from './page.module.css';

const links = [
    {
        id: 1,
        title: "Home",
        url: "/",
    },
    {
        id: 2,
        title: "Portfolio",
        url: "/portfolio",
    },
    {
        id: 3,
        title: "Blog",
        url: "/blog",
    },
    {
        id: 4,
        title: "About",
        url: "/about",
    },
    {
        id: 5,
        title: "Contact",
        url: "/contact",
    },
    {
        id: 6,
        title: "Dashboard",
        url: "/dashboard",
    },
];

const Navbar = () => {
    return (
        <div className={Style.container}>
            <Link href="/" className={Style.logo}>lamamia</Link>

            <div className={Style.links}>
                {links.map((link) => (
                    <Link key={link.id} href={link.url} className={Style.link}>
                        {link.title}
                    </Link>
                ))}
                <button onClick={() => { console.log('error') }} className={Style.logout}>
                    Logout
                </button>
            </div>

        </div >
    )
}

export default Navbar