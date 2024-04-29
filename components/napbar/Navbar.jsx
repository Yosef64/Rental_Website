'use client'
import React,{useState} from 'react';
// import Image from "next/image";
import "./navbar.scss";
import Link from "next/link";
import {Button, Flex} from "antd";

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
                        <Flex gap={15}>
                            <Button  className="button"><Link href="/app/login">Login</Link></Button>
                            <Button className="button" style={{backgroundColor:"#6a9567"}} type="primary">Sign Up</Button>
                        </Flex>

                    </div>
                )}
            </div>
        </div>
    );
}

