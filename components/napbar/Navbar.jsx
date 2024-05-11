"use client"
import React,{useState,useEffect} from 'react'
import "./navbar.scss";
import Link from "next/link";
import {Avatar, Button, Flex} from "antd";
import { getSession } from '@/lib';
import { Session } from '@auth0/nextjs-auth0';
import { handleSession, handleGetSession } from '../login/logGoogle';

export default async function Navbar(props) {
    const [imgUrl, setImgUrl] = useState(null)
    useEffect(() => {
        async function fetchImgUrl() {
            try {
                const { imgUrl } = await handleGetSession();
                setImgUrl(imgUrl);
            } catch (error) {
                console.error('Error fetching image URL:', error);
                // Handle error, e.g., set error state
            }
        }

        fetchImgUrl();
    }, []);
    return (
        <div className="nav">
            <div className="navcontainer">
                <img src="/logo.svg" alt="something is wrong"/>

                { imgUrl ? (
                    <div className="right">
                        <img style={{width:"40px",height:"40px",borderRadius:"50%",objectFit:"cover"}} src={imgUrl} alt="img" />
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
                            <Button  className="button"><Link href="/login">Login</Link></Button>
                            <Button className="button" style={{backgroundColor:"#6a9567"}} type="primary"><Link href="/login">Sign Up</Link></Button>
                        </Flex>

                    </div>
                )}
            </div>
        </div>
    );
}

