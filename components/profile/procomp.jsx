"use client"
import Sider from "antd/es/layout/Sider";
import React, { useEffect, useRef, useState } from "react";
import {
  CaretDownOutlined,
  CheckCircleOutlined,
  CloudUploadOutlined,
  EnvironmentOutlined,
  ExclamationCircleOutlined,
  FundOutlined,

  IdcardOutlined,
  InboxOutlined,
  LineChartOutlined, MehOutlined,
  MessageOutlined,
  PieChartOutlined,
  PlusOutlined,
  QuestionCircleOutlined, SmileOutlined,
  StarFilled,
  StarOutlined,
  UserOutlined,
} from "@ant-design/icons";
import {deletePost, fetchFavourite, profileLinks} from "@/components/profile/profileLinks";
import {
  Button,
  Card,
  Col,
  ConfigProvider,
  Divider,
  Drawer,
  Flex,
  Form,
  Image,
  Input,
  InputNumber,
  List,
  Menu,
  message,
  Modal, notification,
  Pagination, Popconfirm,
  Radio,
  Rate,
  Row, Spin,
} from "antd";
import "./procomp.css";
import "../dashbord/dash.css";
import { listofhouse } from "@/components/center2/listofhouse";
import { Content } from "antd/es/layout/layout";
import Meta from "antd/es/card/Meta";
import Search from "antd/es/input/Search";
import Dragger from "antd/es/upload/Dragger";
import TextArea from "antd/es/input/TextArea";
import { v4 } from "uuid";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { storage } from "@/fireconfig/fireBaseConfig";
import { handleGetSession } from "../login/logGoogle";
import handlePosts, {handleGetUserPosts} from "./postMethod";
import { useRouter } from "next/navigation";
import Link from "next/link";
const listOfSider = [
  {
    key: "profile",
    icon: <UserOutlined />,
    title: "Profile",
    label: <Link href="/dashboard/profile">Profile</Link>
  },
  {
    key: "post",
    icon: <CheckCircleOutlined />,
    title: "Posts",
    label: <Link href="/dashboard/profile/post">Posts</Link>,
  },
  {
    key: "message",
    icon: <MessageOutlined />,
    title: "Messages",
    label: <Link href="/dashboard/profile/message">Messages</Link>,
  },

  {
    key: "report",
    icon: <QuestionCircleOutlined />,
    title: "Report",
    label: <Link href="/dashboard/profile/report">Report</Link>,
  },
  {
    key: "help",
    icon: <ExclamationCircleOutlined />,
    title: "Dashboard",
    label: <Link href="/dashboard">Help</Link>,
  },
];

export function SiderOneComponent({ current }) {
  // function handleClick(e) {
  //   setCurrent(parseInt(e.key));
  // }
  return (

        <Sider
            onBreakpoint={(broken) => {
              console.log(broken);
            }}
            onCollapse={(collapsed, type) => {
              console.log(collapsed, type);
            }}
            collapsedWidth="0"
            breakpoint="lg"
            style={{ backgroundColor: "#dde6ed", marginRight: "14px" }}
            width={150}
        >
          <div className="s-o-item">
            <div className="demo-logo-vertical" />
            <IdcardOutlined style={{ fontSize: "22px" }} />
            <span
                style={{
                  fontFamily: "'Poetsen One',sans-serif",
                  letterSpacing: "",
                  fontWeight: "600",
                  fontSize: "18px",
                  color: "#33384a",
                }}
            >
          JoRent
        </span>
          </div>
          <ConfigProvider
              theme={{
                components: {
                  Menu: {
                    itemSelectedBg: "#2b3042",
                    iconSize: 14,
                    itemMarginBlock: 7,
                    itemSelectedColor: "white",
                  },
                },
                token: {
                  colorBgContainer: "#dde6ed",
                  fontFamily: "'Montserrat',sans-serif",
                  colorText: "#2a2f3a",
                },
              }}
          >
            <Menu

                selectedKeys={[current]}
                // defaultSelectedKeys={["0"]}
                style={{ fontWeight: "700", fontSize: "12px" }}
                items={listOfSider}
            />
          </ConfigProvider>
        </Sider>
  );
}
export function SiderTwoComp() {
  const [selected, setSelected] = useState("");
  const [hover, setHover] = useState();
  const [userInfo, setUserInfo] = useState({});
  // console.log("formProfile" , userInfo);
  useEffect(()=>{
    async function getUserInfo(){
      try {
        const {user} = await handleGetSession();
        // console.log("inside hook",user);
        setUserInfo(user);
      }catch (error){
        throw Error(`Unable to get the session and ${error}`)
      }

    }
    getUserInfo();
  },[])
  function handleHover(key) {
    setHover(key);
  }
  function handleSelected(key) {
    setSelected(key);
  }
  return (
    <Sider
      breakpoint="lg"
      collapsedWidth="0"
      onBreakpoint={(broken) => {
        console.log(broken);
      }}
      onCollapse={(collapsed, type) => {
        console.log(collapsed, type);
      }}
      style={{ backgroundColor: "#dde6ed", borderRadius: "10px" ,overflow:"hidden"}}
    >
      <div className="s-t-item" style={{}}>
        <div className="demo-logo-vertical" />
        <img alt="img" src={userInfo.imgUrl} />
        <div className="s-t-item-one">
          <div className="s-t-item-name">{userInfo.name}</div>
          <span className="s-t-item-location">
            <EnvironmentOutlined /> Ethiopia
          </span>
        </div>
      </div>

      <ConfigProvider
        theme={{
          components: {
            Menu: {
              colorBgContainer: "white",

              itemHeight: 45,
              itemHoverBg: "#dde6ed",
              itemActiveBg: "none",
              subMenuItemBg: "black",
            },
          },
          token: {
            fontFamily: "'Montserrat',sans-serif",
            colorText: "#3c4255",
          },
        }}
      >
        <Menu
          style={{
            margin: "0px 10px",
            borderRadius: "10px",
            padding: "7px 5px",
            fontWeight: "600",
            color: "#3c4255",
            fontSize: "12px !important",
          }}
          items={profileLinks}
        />
      </ConfigProvider>
    </Sider>
  );
}
const info = [
  {
    id: 1,
    icon: <StarFilled style={{ color: "#eccc4c", fontSize: "20px" }} />,
    label: "Rating",
    number: "9.6",
  },
  {
    id: 2,
    icon: <LineChartOutlined style={{ fontSize: "20px" }} />,
    label: "Posts",
    number: "200",
  },
  {
    id: 3,
    icon: <FundOutlined style={{ fontSize: "20px" }} />,
    label: "Price",
    number: "2%",
  },
];
export function DashContents() {
  const [favourite, setFavourite] = useState([]);
  const [loading, setLoading] = useState(true);
  const [api, contextHolder] = notification.useNotification();
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

  useEffect(()=>{
    async function getFavourites(){
      try{
        const {list} = await fetchFavourite();

        return list;
      }catch (error){
        openNotification("topRight","Unable to connect to internet. Please check your internet connection!")
      }
    }
    getFavourites().then(result=>{
      if (result!==undefined) setFavourite(result);
      setLoading(false);
    });
  },[])


  return (
    <Spin spinning={loading}>
      <Row
        style={{ width: "100%" }}
        gutter={16}
        align="center"
        justify="space-around"
      >
        {info.map((item) => (
          <Col className="content-col" key={item.id} span={6}>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Button
                style={{ height: "7vh", border: "none", padding: "10px 15px" }}
              >
                {item.icon}
              </Button>
              <span
                style={{
                  margin: "5px",
                  fontWeight: 600,
                  fontSize: "16px",
                  fontFamily: "'Montserrat',sans-serif",
                  color: "#393f55",
                }}
              >
                {item.number}
              </span>
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  fontWeight: 600,
                  fontFamily: "'Montserrat',sans-serif",
                  color: "#3a4860",
                  backgroundColor: "white",
                  width: "7vw",
                  height: "5vh",
                  textAlign: "center",
                  borderRadius: "5px",
                  fontSize: "16px",
                }}
              >
                {item.label}
              </div>
            </div>
          </Col>
        ))}
      </Row>
      <div style={{ marginTop: "20px" }}>
        <div
          style={{
            margin: "auto",
            display: "flex",
            justifyContent: "space-between",
            padding: "10px",
            width: "95%",
          }}
        >
          <span
            style={{
              fontWeight: "700",
              fontSize: "16px",
              fontFamily: "'Montserrat',sans-serif",
              color: "#3b3f5a",
            }}
          >
            Your Favourite
          </span>
          <Button style={{ width: "6vw", height: "4vh", padding: "1px 7px" }}>
            Hide <CaretDownOutlined />
          </Button>
        </div>
      </div>
      <div style={{ padding: "20px" }}>
        <ConfigProvider
          theme={{
            components: {
              Card: {
                colorPrimary: "white",
              },
            },
          }}
        >
          <Row gutter={[64, 24]}>
            {favourite.map((item) => (
              <Col span={8} key={item.id}>
                <Card
                  hoverable
                  cover={
                    <img
                      style={{
                        width: "100%",
                        height: "100px",
                        objectFit: "cover",
                      }}
                      src={item.postImgUrl}
                      alt="img"
                    />
                  }
                >
                  <Meta
                    style={{ color: "#8b8d93" }}
                    title={item.title}
                    description={item.address}
                  />

                  <span>{item.price}</span>
                </Card>
              </Col>
            ))}
          </Row>
        </ConfigProvider>
      </div>
    </Spin>
  );
}
export function DashPost() {
  const [current, setCurrent] = useState(1);
  const numberPerPage = 6;
  const lastIndex = current * numberPerPage;
  const firstIndex = lastIndex - numberPerPage;
  const [userPosts, setUserPosts] = useState([])
  const data = userPosts.slice(firstIndex, lastIndex);
  const [open, setOpen] = useState(false);
  const formRef = useRef();
  const [userInfo, setUserInfo] = useState({})
  const [loading, setLoading] = useState(true);
  const [display, setDisplay] = useState(false);
  const [infoDisplay, setInfoDisplay] = useState({});
  const [confirmLoading, setConfirmLoading] = useState(false);
  const [api, contextHolder] = notification.useNotification();
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
    useEffect(()=>{
    //
    async function getUserPosts(){

      try {
        const {user} = await handleGetSession();
        const {email} = user;

        const {userPost} = await handleGetUserPosts(email);
        setUserPosts(userPost);
        setLoading(false);
        setUserInfo(user);
      }catch (error){
        message.error("UnAble to get a users Post!");
      }

    }
    getUserPosts();
  },[])
  function handleDisplay(item){
    setDisplay(true);
    const info = {img:item.postImgUrl,desc: item.description,title: item.title,price: item.price,address: item.address,bath:item.bath,rooms:item.rooms,area:item.area,email:item.email,id:item.id}

    setInfoDisplay(info);
  }
  function handleInfoCancel(){
        setDisplay(false);
  }
  function handlePage(page) {
    setCurrent(page);
  }
  function handleOpen() {
    
    setOpen(!open);
  }
  function handleOk() {
    const values = formRef.current.getFieldsValue();
    // console.log(values)
    const {photo,description,address,rooms,bath,price,area} = values;
    const {imgUrl,name,email} = userInfo;
    if(photo.file!=null){
        const imgs = ref(storage,`photos/${v4()}`)
        message.loading("Posting....",0);
        uploadBytes(imgs,photo.file.originFileObj).then(data=>{
            // console.log(data,"imgs");
            getDownloadURL(data.ref).then(val=>{
              // console.log(val);
              const data = {
                title:name,
                userImgUrl:imgUrl,
                postImgUrl:val,
                rooms:rooms,
                address:address,
                description:description,
                bath:bath,
                price:price,
                area:area,
                email:email
              }
                async function postValues(){

                  const res = await handlePosts(data);
                  message.destroy();
                  if(res){
                    
                    message.success("You successfully Post the data!");
                    setOpen(!open);
                  }
                  else{
                    message.error("something is wrong. Please fill the form correctly")
                  }
                }
                postValues();
            })
        })
    }
  }
  const props = {
    name: "file",
    multiple: true,
    // action: 'https://660d2bd96ddfa2943b33731c.mockapi.io/api/upload',
    onChange(info) {
      const { status } = info.file;
      if (status === "done") {
        
        message.success(`${info.file.name} file uploaded successfully.`);
      } else if (status === "error") {
        message.error(`${info.file.name} file upload failed.`);
      }
    },

  };


    function handleInfo() {
      setConfirmLoading(true)
      async function deleteCur(){
        const res = await deletePost(infoDisplay.id)
        if (!res){
          console.log("Something went wrong!")
        }
      }
      deleteCur().then(result=>{
        setDisplay(false);
        setConfirmLoading(false);
        openNotification("topRight","Successfully deleted your Post!",false);
      })
    }
    return (
    <div>
      {contextHolder}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <span className="dash-post-span1">Posts</span>
        <div
          style={{
            display: "flex",
            gap: "30px",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Input rootClassName="dash-post-input1" placeholder="search" />
          <ConfigProvider
            theme={{
              token: {
                colorPrimary: "#6a9567",
                fontFamily: "'Poppins',sans-serif",
                colorBgTextHover: "#fff",
              },
            }}
          >
            <Button
              onClick={handleOpen}
              className="dash-post-button1"
              type="primary"
              icon={<PlusOutlined style={{ fontSize: "12px" }} />}
            >
              {" "}
              New Post
            </Button>
          </ConfigProvider>
        </div>
      </div>
      <Divider />
      <Spin spinning={loading} size="large">
        <ConfigProvider
            theme={{
              components: {
                Card: {
                  colorPrimary: "white",
                },
              },
            }}
        >
          {!data.length ? (
              <div
                  style={{
                    width: "100%",
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
              >
                <img
                    style={{ width: "100%", height: "35vh" }}
                    src="/empty.svg"
                    alt="something"
                />
                <span>No Posts!</span>
              </div>
          ) : (
              <>
                <Row gutter={[64, 24]}>
                  {data.map((item) => (
                      <Col span={8} key={item.id}
                           xs={{
                             flex: '100%',
                           }}
                           sm={{
                             flex: '80%',
                           }}
                           md={{
                             flex: '60%',
                           }}
                           lg={{
                             flex: '40%',
                           }}
                           xl={{
                             flex: '30%',
                           }}
                      >
                        <Card
                            onClick={() => handleDisplay(item)}
                            style={{width:"200px"}}
                            hoverable
                            cover={
                              <img
                                  style={{
                                    width: "100%",
                                    height: "100px",
                                    objectFit: "cover",
                                  }}
                                  src={item.postImgUrl}
                                  alt="img"
                              />
                            }
                        >
                          <Meta
                              style={{ color: "#8b8d93" }}
                              title={item.title}
                              description={item.address}
                          />

                          <span>{item.price}</span>
                        </Card>
                      </Col>
                  ))}
                </Row>
                <div
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      width: "100%",
                      marginTop: "20px",
                    }}
                >
                  <ConfigProvider
                      theme={{
                        token: {
                          colorBgContainer: "#6a9567",
                          colorBorder: "#6a9567",
                          colorPrimary: "white",
                        },
                      }}
                  >
                    <Pagination
                        onChange={handlePage}
                        pageSize={numberPerPage}
                        responsive={true}
                        total={listofhouse.length}
                    />
                  </ConfigProvider>
                </div>
              </>
          )}
        </ConfigProvider>
      </Spin>

      <Modal
        style={{ position: "sticky" }}
        onOk={handleOk}
        onCancel={handleOpen}
        bodyStyle={{
          overflow: "scroll",
          maxHeight: "70vh",
          scrollbarWidth: "none",
        }}
        title="Commit Post"
        mask={true}
        okText="Post"
        open={open}
      >
        <div className="modal-one">
          <Form
          ref={formRef}
            layout="vertical"
            labelCol={{ style: { fontWeight: "600", fontSize: "15px" } }}
          >
            <Form.Item name="address" label="Address : ">
              <Input size="large" />
            </Form.Item>
            <Form.Item name="description" label="Description :">
              <TextArea row={4} />
            </Form.Item>
            <Flex justify="space-around">
              <Form.Item name="price" label="Price ">
                <InputNumber min={0} defaultValue={0}/>
              </Form.Item>
              <Form.Item name="rooms" label="Rooms ">
                <InputNumber min={0} defaultValue={0} />
              </Form.Item>
              <Form.Item name="area" label="Area ">
                <InputNumber />
              </Form.Item>
              <Form.Item name="bath" label="Bath ">
                <InputNumber min={0} defaultValue={0} />
              </Form.Item>
            </Flex>
            
            <Form.Item name="photo" label="Photo :">
              <Dragger style={{ width: "70%" }} {...props}>
                <div style={{ height: "20vh" }}>
                  <p className="ant-upload-icon">
                    <CloudUploadOutlined
                      style={{ color: "#4f9ca8", fontSize: "26px" }}
                    />
                  </p>

                  <span
                    className="ant-upload-text"
                    style={{ fontSize: "12px" }}
                  >
                    Click or drag the photo you want to post to this area
                  </span>
                </div>
              </Dragger>
            </Form.Item>
          </Form>
        </div>
      </Modal>
        <Modal okText="Delete" visible={true} style={{backgroundColor:"black"}}
               okButtonProps={{style:{backgroundColor:"white",border:"1px red solid",color:"red"}}} onCancel={handleInfoCancel}  className="modal-two" bodyStyle={{maxHeight:"70vh",width:"100%",overflowY:"auto",overflowX:"hidden",scrollbarWidth:"none",backgroundColor:"#dde6ed",padding:"10px",borderRadius:"10px"}}
               title="Info" width={1000}  open={display}
               footer={(_, { OkBtn, CancelBtn }) => (
                      <>

                        <CancelBtn />
                        <Popconfirm
                            title="Delete the post"
                            description="Are you sure to delete this post?"
                            onConfirm={handleInfo}
                            okButtonProps={{
                              loading:confirmLoading
                            }}
                            okText="Yes"
                            cancelText="No"
                        >
                          <Button>Delete</Button>
                        </Popconfirm>

                      </>
                  )}
        >
            <div style={{width:"100%",display:"flex",justifyContent:"space-between"}}>
                <div>
                    <Image src={infoDisplay.img} alt="img"
                           style={{width: "50vw", height: "50vh", objectFit: "cover", borderRadius: "10px"}}/>

                    <div className="modal-address"><EnvironmentOutlined/>{" " + infoDisplay.address}</div>


                </div>
                <div className="modal-card-container">
                    <Card
                        className="modal-card-one"
                        align="center"
                    >

                        <div>Price : {"$" + infoDisplay.price}</div>
                        <div className="modal-card-one-item">
                            <img src="https://www.trulia.com/images/icons/txl3/BedIcon.svg" alt="img"/>
                            {infoDisplay.rooms + " "} Beds
                        </div>
                        <div className="modal-card-one-item">
                            <img src="https://www.trulia.com/images/icons/txl3/BathIcon.svg" alt="img"/>
                            {infoDisplay.bath + " "} Baths
                        </div>
                        <div className="modal-card-one-item">
                            <img src="https://www.trulia.com/images/icons/txl3/SquareFeetIcon.svg" alt="img"/>
                            {infoDisplay.area + " "} sqft
                        </div>

                    </Card>

                </div>

            </div>
            <div className="form">
                <div className="modal-form-item">
                    <div className="modal-desc-item">
                        <div className="modal-descTitle">Description</div>
                        <div className="modal-desc">{infoDisplay.desc}</div>
                    </div>

                </div>


            </div>

        </Modal>
    </div>
  );
}
