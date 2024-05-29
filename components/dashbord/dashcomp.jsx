"use client";
import React, { useEffect, useState } from "react";


import {
    Avatar, Badge,
    Button,
    ConfigProvider,
    Divider, Drawer,
    Dropdown,
    Flex,
    Layout,
    Menu, notification, Popconfirm,
    Spin,
    Tooltip,
} from "antd";
import { Content, Header } from "antd/es/layout/layout";
import "./dash.css";
import Search from "antd/es/input/Search";
import {
  locationList,
  capacity,
  priceList,
  houseType,
  siderList,
} from "@/components/dashbord/dashcon";
import {
    AimOutlined,
    BellOutlined,
    ControlOutlined,
    DollarOutlined,
    DownOutlined,
    EnvironmentOutlined, LogoutOutlined, MehOutlined, MenuOutlined, SmileOutlined,
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

    const [current, setCurrent] = useState({location:"Addis Ababa",price:"100-1000",house:"Normal villa",cap:"1-person"});
    const search = {location:"Addis Ababa",price:[100,1000],cap:[1,1]}
    const [active, setActive] = useState(1);
    const [user, setUser] = useState({});
    const [post, setPost] = useState([]);
    const [isOpen, setIsOpen] = useState(false);
    const [loading, setLoading] = useState(false);
    const [api, contextHolder] = notification.useNotification();
    const [listOfMessages, setListofMessages] = useState([]);
    const openNotification = (placement,desc,isWarning) => {
        api.info({
            message: <p style={{color:isWarning ?"red":"green",fontWeight:"600",fontFamily:"'Poppins',sans-serif"}}>{isWarning ? "Warning!":"Success!"}</p>,
            description:
                <p style={{fontFamily:"'Poppins',sans-serif"}}>{desc}</p>,
            placement,
            icon: (
                isWarning ?
                    <SmileOutlined
                        style={{
                            color: 'red',
                        }}
                    />:<MehOutlined style={{color:"green"}}/>
            ),
        });
    };
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
      setLoading(true);
    async function setImageUrl(){
        try {
            const {user} = await handleGetSession();
            // const {imgUrl} = user;
            const {Find} = await dashGet();
            const {notifications,messages} = Find;
            setCount(notifications);
            setListofMessages(messages)
            setUser(user);
        }catch (error){
            openNotification("topRight","Something went wrong. Check your internet connection!",true)
        }

    }
    
    async function setPostList(){
      const {posts} = await dashFetch();

      setPost(posts);

    }
    setImageUrl();
    setPostList().then(()=>{
        setLoading(false);
    })
  }, []);
    useEffect(() => {
        const updated = post.filter((item)=> {
            return (search.price[0] <= item.price <= search.price[1]) && (search.location.toLowerCase() === item.address.toLowerCase()) && (search.cap[0] <= item.cap[1]);

        })
        setPost(updated);
    }, [current]);
  const activeStyle = {
    ...siderStyle,
    backgroundColor: "#6a9567",
    color: "white",
    fontWeight: "bold",
  };

  function handleNotify() {
        async function changeNot(){
            try {
                const data = {notifications: 0}
                const res = await dashPut(data);
                console.log(res);
            }catch (e) {
                openNotification("topRight","Something went wrong. Please check your internet connection!",true)
            }

        }
        changeNot().then(()=>{
            setCount(0);
        })
    }

    return (
    <div style={{ backgroundColor: "red" ,height:"10vh"}}>
        {contextHolder}
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
                   <a href="/">Home</a>
                   <a href="/dashboard">Rent</a>
                   <a href="/#contact">Contact Us</a>
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
                <Dropdown
                    trigger={['click']}
                    arrow
                    placement="bottom"
                    overlay={
                    <Menu style={{width:"200px"}} >
                        {listOfMessages.map((item) => (
                            <Menu.Item
                                style={{fontFamily:"'Poppins',sans-serif",fontSize:"13px",fontWeight: 600,color:"#5c5e61"}}
                                key={item.id}
                                // onClick={() => setCurrent({...current, location: item.name})}
                            >
                                <label><AimOutlined /> You have a new message from <span style={{color:"#2d405a"}}>{item.name}</span></label>
                            </Menu.Item>
                        ))}
                    </Menu>
                    }
                >
                    <Badge  style={{cursor:"pointer"}} size="small" count={count}>
                        <BellOutlined onClick={handleNotify} style={{fontSize:"20px"}} />
                    </Badge>
                </Dropdown>

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
                                        onClick={() => setCurrent({...current, location: item.name})}
                                    >
                                        <label>{item.name}</label>
                                    </Menu.Item>
                                ))}
                            </Menu>
                        }
                        placement="bottomLeft"
                    >
                        <Button type="default">
                            <EnvironmentOutlined/> {current.location} <DownOutlined/>
                        </Button>
                    </Dropdown>},
                    {key:"second",
                        label:(
                            <Dropdown
                                trigger={["click"]}
                                overlay={
                                    <Menu selectable defaultSelectedKeys={[1]}>
                                        {priceList.map((item) => (
                                            <Menu.Item key={item.id} onClick={() => setCurrent({...current, price: item.price})}>
                                                {item.lable}
                                            </Menu.Item>
                                        ))}
                                    </Menu>
                                }
                                placement="bottomLeft"
                            >
                                <Button type="default">
                                    <DollarOutlined/> {current.price} <DownOutlined/>
                                </Button>
                            </Dropdown>)},
                    {key:"third",
                        label:
                            (<Dropdown
                                trigger={["click"]}
                                overlay={
                                    <Menu selectable defaultSelectedKeys={[1]}>
                                        {capacity.map((item) => (
                                            <Menu.Item key={item.id} onClick={() => setCurrent({...current, cap: item.able})}>
                                                {item.lable}
                                            </Menu.Item>
                                        ))}
                                    </Menu>
                                }
                                placement="bottomLeft"
                            >
                                <Button type="default">
                                    <TeamOutlined/> {current.cap} <DownOutlined/>
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
                                            onClick={() => {
                                                setCurrent({...current, house: item.type});
                                            }}
                                        >
                                            {item.lable}
                                        </Menu.Item>
                                    ))}
                                </Menu>
                            }
                            placement="bottomLeft"
                        >
                            <Button type="default">
                                <ControlOutlined/> {current.house} <DownOutlined/>
                            </Button>
                        </Dropdown>
                        )
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
                          <Spin spinning={loading} size="large">
                              {
                                   post.length ? <Contents userInfo={user} posts={post}/> :
                                       <div>
                                           <img style={{width: "90%", height: "60vh"}} src="/no-data.svg" alt="img"/>
                                           <div style={{textAlign:"center",fontFamily:"'Nunito',sans-serif",fontWeight:"700"}}>No match found!</div>
                                       </div>
                              }

                          </Spin>
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
