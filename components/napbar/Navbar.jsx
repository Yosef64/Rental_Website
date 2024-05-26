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
        label:<Link href="/about">About Us</Link>
    },
    {
        key:"discover",
        label:<Link href="/dashboard">Dashboard</Link>
    },
    {
        key:"contact us",
        label:<Link href="/#contact-us">Contact us</Link>
    }
]
export default function Navbar(props) {
    const [imgUrl, setImgUrl] = useState("")
    const [isOpen, setIsOpen] = useState(false);
    const [name, setName] = useState("");
    useEffect(() => {
        async function fetchImgUrl() {
            try {
                const { user } = await handleGetSession();

                const {imgUrl,name} = user;

                // console.log(imgUrl)
                setImgUrl(imgUrl);
                setName(name);
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
                <img src="/logo.svg" alt="something is wrong" style={{width:"100px",height:"70px"}}/>
                <div className="right">

                        <Menu defaultSelectedKeys={["home"]} mode="horizontal" className="link"
                              items={item}
                        />
                </div>

                {imgUrl ? (
                    <Image className="res-right" style={{width: "40px", height: "40px", borderRadius: "50%", objectFit: "cover"}}
                                  src={imgUrl} alt="img"/>
                    ) :
                    (
                        <Flex className="res-right" gap={15}>
                            <Button className="button"><Link href="/login">Login</Link></Button>
                            <Button className="button" style={{backgroundColor: "#6a9567"}} type="primary"><Link
                                href="/login">Sign Up</Link></Button>
                        </Flex>
                    )}

                <div className="res-menu">
                    <MenuOutlined style={{fontSize:"20px"}} onClick={() => setIsOpen(true)}/>
                </div>
            </div>
                <Drawer  width={200} style={{padding:"0 !important"}} closable={false}   visible={true} placement="right"  onClose={()=>setIsOpen(false)} open={isOpen}>

                    <Menu style={{width:"20vw",border:"none"}} >
                        <Menu.Item style={{padding:"0",height:"10vh",overflow:"hidden"}}>
                            {imgUrl ?(
                                <Flex style={{height:"100%"}} align="center" justify="space-evenly">
                                    <Image className="res-right" style={{width: "40px", height: "40px", borderRadius: "50%", objectFit: "cover"}}
                                           src={imgUrl} alt="img"/>
                                    <span style={{fontFamily:"'Cantarell', sans-serif",fontWeight:"600"}}>{name}</span>
                                </Flex>
                                ):(
                                             <Flex direction="vertical" align="center" justify="center" style={{height:"100%"}}>
                                                 <Button className="button"><Link href="/login">Login</Link></Button>
                                             </Flex>
                            )}
                        </Menu.Item>
                    </Menu>
                    <Menu style={{border:"none"}} items={item} />

                </Drawer>

        </div>
    );
}

