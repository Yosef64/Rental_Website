"use client"
import React, {useState} from 'react';

import {
    Anchor,
    Avatar,
    Button,
    ConfigProvider,
    Divider,
    Dropdown,
    Flex,
    Image,
    Input,
    Layout,
    Menu,
    Tooltip
} from "antd";
import {Content, Header} from "antd/es/layout/layout";
import "./dash.css"
import Link from "next/link";
import Search from "antd/es/input/Search";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBell } from '@fortawesome/free-solid-svg-icons';
import {locationList,capacity,priceList,houseType,siderList} from "@/components/dashbord/dashcon";
import {
    BellOutlined,
    ControlOutlined,
    DeleteOutlined,
    DollarOutlined, DownOutlined,
    EnvironmentOutlined,
    TeamOutlined,
    UserOutlined
} from "@ant-design/icons";
import Sider from "antd/es/layout/Sider";
import Contents from "@/components/dashbord/content";

export default function DashComp(props) {

    const [location, setLocation] = useState("Location");
    const [price, setPrice] = useState("100-1000");
    const [house, setHouseType] = useState("Normal villa");
    const [cap, setCap] = useState("1-person");
    const [active, setActive] = useState(1)
    const siderStyle = {
        margin:"auto",
        marginBottom:"10px",
        overflow:"hidden",
        borderRadius: "50%",
        width: "40px",
        height: "40px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
    }
    const activeStyle = {...siderStyle,
        backgroundColor:"#6a9567",
        color:"white",
        fontWeight:"bold"
    }

    
    return (
        <div style={{backgroundColor:"red"}}>
            <Layout style={{position:"sticky",top:"0",zIndex:"1",backgroundColor:"#e0e7ec"}}>
                <Header className="dash-head" style={{display:"flex",backgroundColor:"#e0e7ec",justifyContent:"space-between",boxSizing:"border-box",position:"sticky",
                    top: 0,
                    zIndex: 1,}} >

                    <Flex className="head-child" align="center" justify="space-evenly" style={{width:"45vw"}}>
                        <Image alt="img" width={110} src="/logo.svg"/>
                        <ConfigProvider
                            theme={{
                                components: {
                                    Anchor: {
                                        linkPaddingInlineStart:50
                                    },
                                },
                                token: {
                                    fontFamily:'"Poppins",sans-serif',
                                    fontSize:"17px",
                                    fontWeightStrong:7,
                                    colorPrimary:"black",
                                    colorText:"#7a7979",
                                    lineType:"dashed",
                                    lineHeight:2,
                                    lineWidth:1
                                }
                            }}
                        >

                            <Anchor
                                direction= "horizontal"
                                style={{fontWeight:"600"}}
                                items={[
                                    {
                                        key:"Categories",
                                        title:"Categories",
                                        href:"#"
                                    },
                                    {
                                        key:"Rent",
                                        title:"Rent",
                                        href:"##"
                                    },
                                    {
                                        key:"Buy",
                                        title:"Buy",
                                        href:"###"
                                    }
                                ]
                                }
                            />
                        </ConfigProvider>
                    </Flex>
                    <Flex className="head-child" align="center" justify="space-evenly" style={{width:"40vw",height:"100%"}}>
                        <ConfigProvider
                        theme={{
                            token: {
                                colorPrimary:"#6a9567"
                            }
                        }}
                        >
                            <Search rootClassName="search" style={{width:"20vw"}} enterButton  />
                        </ConfigProvider>

                        <Tooltip title="Notification">
                            <Button style={{border:"none",backgroundColor:"#e0e7ec"}} type="default" shape="circle" icon={<BellOutlined style={{fontSize:"19px"}}/>}  />
                        </Tooltip>
                        <Tooltip title="profile">
                            <Button type="default" size="large" shape="circle" icon={<Avatar size="large"/>}/>
                        </Tooltip>

                    </Flex>
                </Header>
            </Layout>
            <Layout style={{backgroundColor:"#e0e7ec"}}>
                <Header style={{backgroundColor:"#e0e7ec",position:"sticky",zIndex:"1",top:"65px",left:"150",margin:"auto",display:"flex",alignItems:"center",justifyContent:"space-evenly",width:"80%"}}>
                    <Dropdown
                        overlay={
                            <Menu selectable defaultSelectedKeys={[1]}>
                                {
                                    locationList.map((item) => (
                                        <Menu.Item key={item.id} onClick={()=>setLocation(item.name)} >
                                            <label>{item.name}</label>
                                        </Menu.Item>
                                    ))
                                }
                            </Menu>
                        }
                        placement="bottomLeft"
                    >
                        <Button  type="default"><EnvironmentOutlined /> {location} <DownOutlined /></Button>

                    </Dropdown>
                    <Dropdown
                        overlay={
                            <Menu selectable defaultSelectedKeys={[1]}>
                                {
                                    priceList.map((item) => (
                                        <Menu.Item key={item.id} onClick={()=>setPrice(item.price)} >
                                            {item.lable}
                                        </Menu.Item>
                                    ))
                                }
                            </Menu>
                        }
                        placement="bottomLeft"
                    >
                        <Button  type="default"><DollarOutlined /> {price} <DownOutlined /></Button>

                    </Dropdown>
                    <Dropdown
                        overlay={
                            <Menu selectable defaultSelectedKeys={[1]}>
                                {
                                    capacity.map((item) => (
                                        <Menu.Item key={item.id} onClick={()=>setCap(item.able)} >
                                            {item.lable}
                                        </Menu.Item>
                                    ))
                                }
                            </Menu>
                        }
                        placement="bottomLeft"
                    >
                        <Button  type="default"><TeamOutlined /> {cap} <DownOutlined /></Button>

                    </Dropdown>
                    <Dropdown
                        overlay={
                            <Menu selectable defaultSelectedKeys={[1]}>
                                {
                                    houseType.map((item) => (
                                        <Menu.Item key={item.id} onClick={()=>setHouseType(item.type)} >
                                            {item.lable}
                                        </Menu.Item>
                                    ))
                                }
                            </Menu>
                        }
                        placement="bottomLeft"
                    >
                        <Button  type="default"><ControlOutlined /> {house} <DownOutlined /></Button>

                    </Dropdown>
                </Header>
                <Layout style={{backgroundColor:"#e0e7ec !important"}}>
                    <Sider width={60} style={{borderRadius:"20px",backgroundColor:"white",paddingTop:"20px",top:"150px",left:"60px",bottom:"60px",position:"fixed"}} >
                        <div>
                            <Menu >
                                {
                                    siderList.map((item) => (
                                        <Menu.Item onClick={()=>setActive(item.key)} key={item.key}
                                                   style={item.key===active ? activeStyle:siderStyle}>
                                            {item.icon}
                                        </Menu.Item>
                                    ))
                                }
                            </Menu>
                        </div>
                        <Divider orientation="left" plain/>
                        <div style={{display:"flex",alignItems:"end",justifyContent:"space-around"}}>
                            <Menu>
                                <Menu.Item style={siderStyle}>
                                    <DeleteOutlined style={{color:"red",fontSize:"18px"}}/>
                                </Menu.Item>
                                <Menu.Item style={siderStyle}>
                                    <UserOutlined style={{fontSize:"18px"}}/>
                                </Menu.Item>
                                {/*<Menu.Item>*/}
                                {/*    <UserOutlined/>*/}
                                {/*</Menu.Item>*/}
                            </Menu>
                        </div>
                    </Sider>
                    <Content className="content" style={{overflowX:"hidden",width:"50vw",height: "72vh",margin:"20px 90px 0px 200px",overflowY:"auto"}}>
                        <Contents/>

                    </Content>
                </Layout>

            </Layout>
        </div>


    );
}

