"use client"
import React,{useState,useEffect} from 'react'
import "./navbar.scss";
import Link from "next/link";
import {Avatar, Button, ConfigProvider, Drawer, Flex, Image, Menu} from "antd";
import { getSession } from '@/lib';
import { Session } from '@auth0/nextjs-auth0';
import { handleSession, handleGetSession } from '../login/logGoogle';
import {MenuOutlined} from "@ant-design/icons";
const item = [
    {
        key:"home",
        label:<Link href="/">Home</Link>
    },
    {
        key:"about",
        label:<Link href="/about">About</Link>
    },
    {
        key:"discover",
        label:<Link href="/">Discover</Link>
    },
    {
        key:"contact us",
        label:<Link href="/">Contact us</Link>
    }
]
export default function Navbar(props) {
    const [imgUrl, setImgUrl] = useState("")
    const [isOpen, setIsOpen] = useState(false);
    useEffect(() => {
        async function fetchImgUrl() {
            try {
                const { user } = await handleGetSession();

                const {imgUrl} = user;
                // console.log(imgUrl)
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

                {imgUrl ? (
                        <div className="right">
                            <Image style={{width: "40px", height: "40px", borderRadius: "50%", objectFit: "cover"}}
                                   src={imgUrl} alt="img"/>
                        </div>
                    ) :
                    (
                        <div className="right">
                            <ConfigProvider
                                theme={{
                                    components: {
                                        Menu: {
                                            colorFillContentHover: "green",
                                            colorBgSpotlight: "green",
                                            colorBorder: "none"
                                        }
                                    }
                                }}
                            >
                                <Menu mode="horizontal" className="link"
                                      items={item}
                                />
                            </ConfigProvider>

                            <Flex gap={15}>
                                <Button className="button"><Link href="/login">Login</Link></Button>
                                <Button className="button" style={{backgroundColor: "#6a9567"}} type="primary"><Link
                                    href="/login">Sign Up</Link></Button>
                            </Flex>

                        </div>
                    )}
                <div className="res-menu">
                    <MenuOutlined  onClick={() => setIsOpen(true)}/>
                </div>
            </div>
            <ConfigProvider
            theme={{
                components:{
                    Drawer:{
                        motionEaseOut:"1s all",
                        size:5,
                        lineWidth:0,
                        boxShadow:"none"
                    }
                }
            }}

            >
                <Drawer width={200} height={100} colapsable={false}   visible={true} placement="right"  onClose={()=>setIsOpen(false)} open={isOpen}>

                    <Menu items={item} />
                </Drawer>
            </ConfigProvider>

        </div>
    );
}

