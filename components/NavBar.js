import React from "react";
import Link from "next/link";

const NavBar = ()=> {
    return (
        <>
            <nav>
                <div>
                    <Link prefetch={false} href="/"> 
                        <p>
                            <a>Home</a>
                        </p>
                    </Link>
                    <Link href="/about">
                        <p>
                            <a>About</a>
                        </p>
                    </Link>
                </div>
            </nav>
            <style jsx>{`
                nav {
                    border-bottom: 1px solid black;
                }

                nav div {
                    display: flex; 
                    align-items: center; 
                    justify-content: space-around; 
                }
            `}</style>
        </>
    )
}

export default NavBar 