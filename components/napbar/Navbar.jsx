'use client'
import React,{useState} from 'react';
// import Image from "next/image";
import "./navbar.scss";
import Link from "next/link";

export default function Navbar(props) {
    const [isLogin, setIsLogin] = useState(false);

    return (
        <div className="nav">
            <div className="navcontainer">
                <img src="/logo.svg" alt="something is wrong"/>

                {isLogin ? (
                    <div className="right">

                    </div>
                    ):
                    (
                    <div className="right">
                        <div className="link">
                            <Link href="">Home</Link>
                            <Link href="">About Us</Link>
                            <Link href="">Discover</Link>
                            <Link href="">Contact Us</Link>
                        </div>
                        <div className="button">
                            <button className="login">Login</button>
                            <button className="sign">Sign Up</button>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}

