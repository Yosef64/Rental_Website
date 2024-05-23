"use client";
import React, { useEffect, useState } from "react";
import {useRouter} from "next/navigation";

import {
    Anchor,
    Avatar, Badge,
    Button,
    ConfigProvider,
    Divider, Drawer,
    Dropdown,
    Flex,
    Image,
    Input,
    Layout,
    Menu, Popconfirm,
    Spin,
    Tooltip,
} from "antd";
import { Content, Header } from "antd/es/layout/layout";
import "./dash.css";
import Link from "next/link";
import Search from "antd/es/input/Search";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBell } from "@fortawesome/free-solid-svg-icons";
import {
  locationList,
  capacity,
  priceList,
  houseType,
  siderList,
} from "@/components/dashbord/dashcon";
import {
    BellOutlined,
    ControlOutlined,
    DeleteOutlined,
    DollarOutlined,
    DownOutlined,
    EnvironmentOutlined, LogoutOutlined, MenuFoldOutlined, MenuOutlined,
    TeamOutlined,
    UserOutlined,
} from "@ant-design/icons";
import Sider from "antd/es/layout/Sider";
import Contents from "@/components/dashbord/content";
// import { getSession } from "@/lib";
import { handleGetSession } from "../login/logGoogle";
import {dashFetch, dashGet, dashPut, logOut} from "./dashFetch";
import 'antd/dist/reset.css'
export default function DashComp({ }) {
  const [location, setLocation] = useState("Location");
  const [price, setPrice] = useState("100-1000");
  const [house, setHouseType] = useState("Normal villa");
  const [cap, setCap] = useState("1-person");
  const [active, setActive] = useState(1);
  const [user, setUser] = useState({});
  const [post, setPost] = useState([]);
    const [isOpen, setIsOpen] = useState(false)
    const router = useRouter();
    const [count, setCount] = useState(0);
    const siderStyle = {
    margin: "auto",
    marginBottom: "10px",
    overflow: "hidden",
    borderRadius: "50%",
    width: "40px",
    height: "40px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  };

    function handleRoute(){
        window.location.href = '/dashboard/profile';
    }
  useEffect(() => {
    async function setImageUrl(){
        const {user} = await handleGetSession();
        // const {imgUrl} = user;
        const {Find} = await dashGet();
        const {notifications} = Find;
        setCount(notifications);
        setUser(user);
    }
    
    async function setPostList(){
      const posts = await dashFetch();
      console.log(JSON.stringify(post,null,2));
      setPost(posts);
    }
    setImageUrl();
    setPostList()
  }, []);

  const activeStyle = {
    ...siderStyle,
    backgroundColor: "#6a9567",
    color: "white",
    fontWeight: "bold",
  };

  function handleNotify() {
        async function changeNot(){
            const data = {notifications: 0}
            const res = await dashPut(data);
        }
        changeNot().then(result=>{
            setCount(0);
        })
    }

    return (
    <div style={{ backgroundColor: "red" ,height:"10vh"}}>
      <Layout
        style={{
          position: "sticky",
          top: "0",
          zIndex: "1",
          backgroundColor: "#e0e7ec",
            width:"100%",
            overflow:"hidden",
            height:"100%"
        }}
      >
        <Header
          className="dash-head"
        >
            <Flex
                className="head-child1"
                align="center"
                justify="space-evenly"
                style={{width: "45vw"}}
            >
                <img className="dash-logo" alt="img" style={{width:"80px",height:"60px"}} src="/logo.svg"/>
                <div className="dash-icon">
                    <MenuOutlined onClick={() => setIsOpen(!isOpen)} style={{fontSize: "25px"}}/>
                </div>
               <div className="dash-links" >
                   <a href="/">Categories</a>
                   <a href="/">Rent</a>
                   <a href="/">Buy</a>
               </div>
            </Flex>
            <Flex
                className="head-child2"
                align="center"
                justify="space-evenly"
                style={{width: "40vw", height: "100%" }}
          >
            <ConfigProvider
              theme={{
                token: {
                  colorPrimary: "#6a9567",
                },
              }}
            >
              <Search
                rootClassName="search"
                style={{ width: "20vw"}}
                enterButton
              />
            </ConfigProvider>

            <Tooltip title="Notification">
                <Badge  style={{cursor:"pointer"}} size="small" count={count}>
                    <BellOutlined onClick={handleNotify} style={{fontSize:"20px"}} />
                </Badge>
                {/*<Button*/}
                {/*    style={{ border: "none", backgroundColor: "#e0e7ec" }}*/}
                {/*    type="default"*/}
                {/*    shape="circle"*/}
                {/*    icon={}*/}
                {/*/>*/}
            </Tooltip>
            <Tooltip title="profile">
              <Button
                type="default"
                size="large"
                shape="circle"

                icon={
                  <Avatar src={<img src={user.imgUrl} alt="img" />} size="large" />
                }
              />
            </Tooltip>
          </Flex>
        </Header>
      </Layout>
      <Layout style={{ backgroundColor: "#e0e7ec",width:"100%", }}>
          <Menu mode="horizontal" className="dash-header2"
                style={{border:"none",textDecoration:"none",marginTop:"10px"}}
                items = {[{
                    key:"first",
                    label:<Dropdown
                        trigger={["click"]}
                        overlay={
                            <Menu selectable defaultSelectedKeys={[1]}>
                                {locationList.map((item) => (
                                    <Menu.Item
                                        key={item.id}
                                        onClick={() => setLocation(item.name)}
                                    >
                                        <label>{item.name}</label>
                                    </Menu.Item>
                                ))}
                            </Menu>
                        }
                        placement="bottomLeft"
                    >
                        <Button type="default">
                            <EnvironmentOutlined/> {location} <DownOutlined/>
                        </Button>
                    </Dropdown>},
                    {key:"second",
                        label:(
                            <Dropdown
                                trigger={["click"]}
                                overlay={
                                    <Menu selectable defaultSelectedKeys={[1]}>
                                        {priceList.map((item) => (
                                            <Menu.Item key={item.id} onClick={() => setPrice(item.price)}>
                                                {item.lable}
                                            </Menu.Item>
                                        ))}
                                    </Menu>
                                }
                                placement="bottomLeft"
                            >
                                <Button type="default">
                                    <DollarOutlined/> {price} <DownOutlined/>
                                </Button>
                            </Dropdown>)},
                    {key:"third",
                        label:
                            (<Dropdown
                                trigger={["click"]}
                                overlay={
                                    <Menu selectable defaultSelectedKeys={[1]}>
                                        {capacity.map((item) => (
                                            <Menu.Item key={item.id} onClick={() => setCap(item.able)}>
                                                {item.lable}
                                            </Menu.Item>
                                        ))}
                                    </Menu>
                                }
                                placement="bottomLeft"
                            >
                                <Button type="default">
                                    <TeamOutlined/> {cap} <DownOutlined/>
                                </Button>
                            </Dropdown>)
                    },
                    {
                        key:"fourth",
                        label:(<Dropdown
                            trigger={["click"]}
                            overlay={
                                <Menu selectable defaultSelectedKeys={[1]}>
                                    {houseType.map((item) => (
                                        <Menu.Item
                                            key={item.id}
                                            onClick={() => setHouseType(item.type)}
                                        >
                                            {item.lable}
                                        </Menu.Item>
                                    ))}
                                </Menu>
                            }
                            placement="bottomLeft"
                        >
                            <Button type="default">
                                <ControlOutlined/> {house} <DownOutlined/>
                            </Button>
                        </Dropdown>)
                    }]} />

          <ConfigProvider
          theme={{
              token:{

              },
              components:{
                  Layout:{
                      colorBgLayout:"#dde6ed"
                  }
              }
          }}
          >
              <Layout className="lay-nested1" >
                  <Sider
                      // breakpoint="lg"
                      collapsedWidth="0px"
                      className="dash-sider1"
                      width={60}
                    style={{backgroundColor:"white",}}
                  >
                          <Menu mode="horizonatal">
                              {siderList.map((item) => (
                                  <Menu.Item
                                      onClick={() => {
                                          setActive(item.key);
                                          switch (item.key){
                                              case 4:
                                                  window.location.href = "/dashboard/profile";
                                                  break;
                                              case 2:
                                                  window.location.href = "/dashboard/profile/message"
                                              }

                                      }}
                                      key={item.key}
                                      style={item.key === active ? activeStyle : siderStyle}
                                  >
                                      {item.icon}
                                  </Menu.Item>
                              ))}
                          </Menu>

                      <Divider orientation="left" plain />

                          <Menu mode="vertical">
                              <Menu.Item style={siderStyle}>
                                  <Popconfirm
                                      placement="left"
                                      title="Are sure you want to logout?"
                                      okText="Yes"
                                      cancelText="No"
                                      onConfirm={logOut}
                                  >
                                      <Button style={{border:"none"}} shape="circle"><LogoutOutlined style={{ fontSize: "18px",color:"red" }} /></Button>
                                  </Popconfirm>
                              </Menu.Item>

                                  <Menu.Item onClick={handleRoute} style={siderStyle}>
                                      <UserOutlined style={{ fontSize: "18px" }} />
                                  </Menu.Item>


                              {/*<Menu.Item>*/}
                              {/*    <UserOutlined/>*/}
                              {/*</Menu.Item>*/}
                          </Menu>

                  </Sider>
                  <ConfigProvider
                      // theme={{
                      //     token:{
                      //         colorBgContainer:"#dde6ed"
                      //     }
                      // }}
                  >
                      <Content
                          className="content"
                          style={{
                              overflowX: "hidden",
                              width: "100vw",
                              height: "72vh",
                              margin: "3% 5% 0px 10%",
                              overflowY: "auto"
                          }}
                      >
                          <Contents userInfo={user}/>
                      </Content>
                  </ConfigProvider>

                  {/* </Spin> */}
              </Layout>
          </ConfigProvider>


      </Layout>
        <Drawer closable={false} placement="left" onClose={()=>setIsOpen(false)} width={150} open={isOpen}>
            <Menu style={{marginBottom: "50px"}} >
                <Menu.Item style={{display:"flex",justifyContent: "center",alignItems: "center",width:"13vw",height:"10vh"}}>
                    <img  alt="img" style={{width: "80px", height: "60px"}} src="/logo.svg"/>
                </Menu.Item>
            </Menu>
            <Menu mode="vertical">

                {siderList.map((item) => (
                    <Menu.Item
                        onClick={() => setActive(item.key)}
                        key={item.key}
                        style={item.key === active ? activeStyle : siderStyle}
                    >
                        {item.icon}
                    </Menu.Item>
                ))}
            </Menu>
            <Divider orientation="left" plain />
            <Menu mode="vertical">
                <Menu.Item style={siderStyle}>
                    <LogoutOutlined style={{ color: "red", fontSize: "18px" }} />
                </Menu.Item>
                <Menu.Item style={siderStyle} onClick={handleRoute}>
                    <UserOutlined style={{ fontSize: "18px" }} />
                </Menu.Item>
            </Menu>



                {/*<Menu.Item>*/}
                {/*    <UserOutlined/>*/}
                {/*</Menu.Item>*/}

        </Drawer>
    </div>
  );
}
