import React from "react";
import NavBar from "./NavBar";

const Layout = ({ children })=> (
    <div>
        <NavBar />
            {children}
        <footer>Footer</footer>
        <style jsx>{`
            footer {
                text-align: center; 
            }
        `}</style>
    </div>
)

export default Layout