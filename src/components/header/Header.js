import React from 'react'
import Heading from './Heading'

export default function Header() {
    return (
        <header className="app-header">
            <Heading />
            <section>
                <a href="/videos" className="">Videos</a>
                <a href="/create-user" className="">Create User</a>
                <a href="/logout" className="">Logout Kyle Coberly</a>
            </section>
        </header>
        
    )
}