
import Sider from "antd/es/layout/Sider";
import {useRef, useState} from 'react'
import {
    CaretDownOutlined,
    CheckCircleOutlined, CloudUploadOutlined, EnvironmentOutlined,
    ExclamationCircleOutlined, FundOutlined,
    HomeOutlined,
    IdcardOutlined, InboxOutlined, LineChartOutlined,
    MessageOutlined, PieChartOutlined, PlusOutlined,
    QuestionCircleOutlined, StarFilled, StarOutlined, UserOutlined
} from "@ant-design/icons";
import {profileLinks} from "@/components/profile/profileLinks";
import {
    Button,
    Card,
    Col,
    ConfigProvider,
    Divider,
    Drawer, Flex,
    Form, Image,
    Input, InputNumber, List,
    Menu,
    message,
    Modal,
    Pagination, Radio, Rate,
    Row
} from "antd";
import "./procomp.css"
import {listofhouse} from "@/components/center2/listofhouse";
import {Content} from "antd/es/layout/layout";
import Meta from "antd/es/card/Meta";
import Search from "antd/es/input/Search";
import Dragger from "antd/es/upload/Dragger";
import TextArea from "antd/es/input/TextArea";
const listOfSider = [
    {
        key:'0',
        icon:<UserOutlined />,
        title:"Profile",
        label:"Profile"
    },
    {
        key:'1',
        icon:<CheckCircleOutlined />,
        title:"Posts",
        label: "Posts"
    },
    {
        key:'2',
        icon:<MessageOutlined />,
        title:"Messages",
        label:"Message"
    },

    {
        key:'3',
        icon:<QuestionCircleOutlined />,
        title:"Report",
        label:"Report"
    },
    {
        key:'4',
        icon:<ExclamationCircleOutlined />,
        title:"Help",
        label:"Help"
    },
]

export function SiderOneComponent({current,setCurrent}) {
    function handleClick(e){
        setCurrent(parseInt(e.key));
    }
    return (
        <Sider collapsedWidth="0" breakpoint="lg" style={{overflow:"hidden",backgroundColor:"#dde6ed",marginRight:"14px"}}  className="sider-one"  width={150}>
            
            <div className= "s-o-item">
                <IdcardOutlined style={{fontSize:"22px"}}/>
                <span style={{fontFamily:"'Poetsen One',sans-serif",letterSpacing:"",fontWeight:"600",fontSize:"18px",color:"#33384a"}}>JoRent</span>
            </div>
            <ConfigProvider
                theme={{
                    components: {
                        Menu: {

                            itemSelectedBg:"#2b3042",
                            iconSize:14,
                            itemMarginBlock:7,
                            itemSelectedColor:'white'
                        },
                    },
                    token: {
                        colorBgContainer:"#dde6ed",
                        fontFamily:"'Montserrat',sans-serif",
                        colorText:"#2a2f3a"
                    }
                }}
            >
                <Menu
                    onClick={handleClick}
                    defaultSelectedKeys={['0']}
                    style={{fontWeight:"700",fontSize:"12px"}}
                    items={listOfSider}
                />

            </ConfigProvider>


        </Sider>
    )
}
export function SiderTwoComp(){
    const [selected, setSelected] = useState("");
    const [hover, setHover] = useState()
    function handleHover(key){
        setHover(key);
    }
    function handleSelected(key){
        setSelected(key);
    }
    return (
        <Sider style={{backgroundColor:"#dde6ed",borderRadius:"10px",overflow:"hidden"}} className="sider-two" >
            <div className="s-t-item" style={{}}>
                <img alt="img" src="/house/house3.jpg" />
                <div className="s-t-item-one">
                    <div className= "s-t-item-name">John</div>
                    <span className="s-t-item-location"><EnvironmentOutlined /> Ethiopia</span>
                </div>
            </div>

                <ConfigProvider
                    theme={{
                        components:{
                            Menu:{
                                colorBgContainer:'white',

                                itemHeight:45,
                                itemHoverBg:'#dde6ed',
                                itemActiveBg:"none",
                                subMenuItemBg:"black"

                            }
                        },
                        token: {
                            fontFamily:"'Montserrat',sans-serif",
                            colorText:"#3c4255",

                        }
                    }}
                >
                    <Menu

                    style={{margin:"0px 10px",borderRadius:"10px",padding:"7px 5px",fontWeight:"600",color:"#3c4255",fontSize:"12px !important"}}
                    items={profileLinks}
                    />

                    </ConfigProvider>


        </Sider>
    )
}
const info =[
    {
        id:1,
        icon:<StarFilled style={{color:"#eccc4c",fontSize:"20px"}} />,
        label:"Rating",
        number:"9.6"
    },
    {
        id:2,
        icon:<LineChartOutlined style={{fontSize:"20px"}} />,
        label:"Posts",
        number: "200"

    },
    {
        id:3,
        icon:<FundOutlined style={{fontSize:"20px"}}  />,
        label:"Price",
        number:"2%"
    }
]
export function DashContents(){

    return (
        <>
            <Row style={{width:"100%"}} gutter={16} align="center" justify="space-around">
                {
                    info.map((item) => (
                        <Col className="content-col" key={item.id} span={6}>
                            <div style={{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center"}}>
                                <Button style={{height:"7vh",border:"none",padding:"10px 15px"}}>{item.icon}</Button>
                                <span style={{margin:"5px",fontWeight:600,fontSize:"16px",fontFamily:"'Montserrat',sans-serif",color:"#393f55"}}>
                                    {item.number}
                                </span>
                                <div style={{display:"flex",justifyContent:"center",alignItems:"center",fontWeight:600,fontFamily:"'Montserrat',sans-serif",color:"#3a4860",backgroundColor:"white",width:"7vw",height:"5vh",textAlign:"center",borderRadius:"5px",fontSize:"16px"}}>{item.label}</div>
                            </div>

                        </Col>
                    ))
                    }
            </Row>
            <div style={{marginTop:"20px"}}>
                <div style={{margin:"auto",display:"flex",justifyContent:"space-between",padding:"10px",width:"95%"}}>
                    <span style={{fontWeight:"700",fontSize:"16px",fontFamily:"'Montserrat',sans-serif",color:"#3b3f5a"}}>Your Favourite</span>
                    <Button style={{width:"6vw",height:"4vh",padding:"1px 7px"}}>Hide <CaretDownOutlined /></Button>
                </div>
            </div>
            <div style={{padding:"20px"}}>
                <ConfigProvider
                theme={{
                    components: {
                        Card:{
                            colorPrimary:"white"
                        }
                    }
                }}
                >
                    <Row gutter={[64,24]}>
                        {
                            listofhouse.map((item) => (
                                <Col span={8} key={item.id}>
                                    <Card
                                        hoverable
                                        cover={<img style={{width:"100%",height:"100px",objectFit:"cover"}} src={item.img} alt="img" />}
                                    >
                                        <Meta style={{color:"#8b8d93"}} title={item.title} description={item.address} />

                                        <span>{item.price}</span>
                                    </Card>
                                </Col>
                            ))
                        }
                    </Row>
                </ConfigProvider>

            </div>

      </>
    )
}
export function DashPost(){
    const [current, setCurrent] = useState(1);
    const numberPerPage = 6;
    const lastIndex = current * numberPerPage;
    const firstIndex = lastIndex - numberPerPage;
    const data = listofhouse.slice(firstIndex,lastIndex);
    const [open, setOpen] = useState(false);
    const [info, setInfo] = useState(false);
    const [infoDisplay,setInfoDisplay] = useState({img:null,title:null,desc:"",price:"",address:""})
    const desc = ['terrible','terrible', 'bad','bad', 'normal','normal', 'good','good', 'wonderful','wonderful']
    const [value, setValue] = useState(null);
    const [form] = Form.useForm();
    const some = useRef();

    function handlePage(page){
        setCurrent(page);
    }
    function handleOpen(){
        setOpen(!open);
    }
    function handleOk(){
        setOpen(false);
    }
    const props = {
        name: 'file',
        multiple: true,
        // action: 'https://660d2bd96ddfa2943b33731c.mockapi.io/api/upload',
        onChange(info) {
            const { status } = info.file;
            if (status !== 'uploading') {
                console.log(info.file, info.fileList);
            }
            if (status === 'done') {
                message.success(`${info.file.name} file uploaded successfully.`);
            } else if (status === 'error') {
                message.error(`${info.file.name} file upload failed.`);
            }
        },
        onDrop(e) {
            console.log('Dropped files', e.dataTransfer.files);
        },
    };
    function onFinish(){

        const formValues = form.getFieldsValue();
        const formData = new FormData();

        for (const key in formValues) {
            formData.append(key, formValues[key]);
        }

        const formQueryString = new URLSearchParams(formData).toString();

        console.log('Form data as HTML form:', formQueryString);
        console.log(some.current)
    }

    function handleDisplay(item) {

        setInfo(true);
        setInfoDisplay({img:item.img,desc: item.desc,title: item.title,price: item.price,address: item.address})
    }

    function handleInfo() {
        if(value === null){
            message.error("Please rate the house of cancel the Modal!")
        }else {
            setInfo(!info);
            setValue(null);
            message.success("You have successfully rated the house");
        }
    }
    function handleInfoCancel(){
        setInfo(false);
        setValue(null);
    }

    return (
        <div>
            <div style={{display:"flex",justifyContent:"space-between",alignItems:"center"}}>
                <span className="dash-post-span1">Posts</span>
                <div style={{display:"flex",gap:"30px",alignItems:"center",justifyContent:"center"}}>
                    <Input rootClassName="dash-post-input1" placeholder="search" />
                    <ConfigProvider
                    theme={{
                        token:{
                            colorPrimary:"#6a9567",
                            fontFamily:"'Poppins',sans-serif",
                            colorBgTextHover:"#fff"


                        }
                    }}
                    >
                        <Button onClick={handleOpen} className="dash-post-button1" type="primary" icon={<PlusOutlined style={{fontSize:"12px"}} />} > New Post</Button>
                    </ConfigProvider>

                </div>

            </div>
            <Divider />
            <ConfigProvider
                theme={{
                    components: {
                        Card:{
                            colorPrimary:"white"
                        }
                    }
                }}
            >
                {
                    !data.length ?  (
                        <div style={{width:"100%",height:"100%",display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"}}>
                            <img style={{width:"100%",height:"35vh"}} src="/empty.svg" alt="something"/>
                            <span>No Posts!</span>
                        </div>

                    ):(
                        <>
                        <Row gutter={[64,24]}>
                            {
                                data.map((item) => (
                                    <Col span={8} key={item.id}>
                                        <Card
                                            onClick={()=>handleDisplay(item)}
                                            hoverable
                                            cover={<img style={{width:"100%",height:"100px",objectFit:"cover"}} src={item.img} alt="img" />}
                                        >
                                            <Meta style={{color:"#8b8d93"}} title={item.title} description={item.address} />

                                            <span>{item.price}</span>
                                        </Card>
                                    </Col>
                                ))
                            }
                        </Row>
                    <div  style={{display:'flex',justifyContent:'center',width:"100%",marginTop:"20px"}}>
                        <ConfigProvider
                            theme={{

                                token: {
                                    colorBgContainer:"#6a9567",
                                    colorBorder:"#6a9567",
                                    colorPrimary:"white"
                                }
                            }}
                        >
                            <Pagination onChange={handlePage} pageSize={numberPerPage} responsive={true} total ={listofhouse.length}  />
                        </ConfigProvider>
                    </div>
                        </>
                )
                }

            </ConfigProvider>
            <Modal style={{position:"sticky"}} onOk={handleOk} onCancel={handleOpen} bodyStyle={{overflow:"scroll",maxHeight:"70vh",scrollbarWidth:"none"}}  title="Commit Post" mask={true} okText="Post"  open={open}>
                <div className="modal-one">
                    <Form layout="vertical" labelCol={{style:{fontWeight:"600",fontSize:"15px"}}}>
                        <Form.Item label="Address : ">
                            <Input size="large" />
                        </Form.Item>
                        <Form.Item label="Description :" >
                            <TextArea row={4} />
                        </Form.Item>

                        <Form.Item label="Price :">
                            <InputNumber />
                        </Form.Item>
                        <Form.Item label="Photo :">

                            <Dragger style={{width:"70%"}} {...props} >

                                <div style={{height:"20vh"}}>
                                    <p className="ant-upload-icon">
                                        <CloudUploadOutlined style={{color:"#4f9ca8",fontSize:"26px"}} />
                                    </p>


                                    <span className="ant-upload-text" style={{fontSize:"12px"}} >Click or drag the photo you want to post to this area</span>

                                </div>

                            </Dragger>

                        </Form.Item>
                    </Form>
                </div>

            </Modal>
            <Modal okButtonProps={{style:{backgroundColor:"#6a9567",border:"none"}}} onCancel={handleInfoCancel} onOk={handleInfo} className="modal-two" bodyStyle={{maxHeight:"70vh",width:"75vw",overflowY:"auto",overflowX:"hidden",scrollbarWidth:"none",backgroundColor:"#dde6ed",padding:"10px",borderRadius:"10px"}}   title="Info" width={1000}  open={info}>
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
                                2 Beds
                            </div>
                            <div className="modal-card-one-item">
                                <img src="https://www.trulia.com/images/icons/txl3/BathIcon.svg" alt="img"/>
                                1 Baths
                            </div>
                            <div className="modal-card-one-item">
                                <img src="https://www.trulia.com/images/icons/txl3/SquareFeetIcon.svg" alt="img"/>
                                1,339 sqft
                            </div>

                        </Card>

                    </div>

                </div>
                <div className="form">
                    <div>
                        <div className="modal-desc-item">
                            <div className="modal-descTitle">Description</div>
                            <div className="modal-desc">{infoDisplay.desc}</div>
                        </div>
                        <div className="modal-two-rating">
                            <div className="modal-two-rating-title">
                                Rate
                            </div>
                            <Flex className="modal-two-rating-item" vertical gap="middle">
                                <Rate onChange={setValue} tooltips={desc} count={10} value={value}/>
                                {value ? <span>{desc[value - 1] + "!"}</span> : null}

                            </Flex>
                        </div>
                    </div>

                    <ConfigProvider
                        theme={{
                            components: {
                                Form: {
                                    labelColor: "#526d82",


                                },
                                Button: {
                                    colorPrimary: "#568356",
                                    colorPrimaryHover: "#5d755b"
                                }
                            },
                            token: {
                                fontFamily: "'Poppins',sans-serif"
                            }
                        }}
                    >
                        <Form ref={some} form={form} onFinish={onFinish} layout="vertical"
                              style={{backgroundColor: "white", width: "25vw", padding: "15px", borderRadius: "10px"}}>
                            <Form.Item name="phone" style={{fontWeight: "600"}} label="Phone" rules={[
                                {
                                    required: true,
                                    message: 'Please input your name!',
                                },
                            ]}>
                                <Input style={{height: "7vh"}} placeholder="Phone number"/>
                            </Form.Item>
                            <Form.Item name="email" style={{display:"none"}}>
                                <Input value="yosefale#gmail.com" />
                            </Form.Item>
                            <Form.Item name="Email" style={{fontWeight: "600"}} label="Email">
                                <Input style={{height: "7vh"}} type="email" value="Yoseph@gmail.com"/>

                            </Form.Item>
                            <Form.Item name="message" style={{fontWeight: "600"}} label="Message">
                                <TextArea value="I am interested in your house. And i wanna rent it!" row={4}/>
                            </Form.Item>
                            <Form.Item wrapperCol={{offset: 8}}>
                                <Button style={{
                                    display:"flex",
                                    alignItems:"center",
                                    justifyContent:"center",
                                    height: "7vh",
                                    width: "10vw",
                                    fontWeight: "600",
                                    fontFamily: "'Poppins',sans-serif"
                                } } htmlType="sumbit" type="primary">Request Info</Button>
                            </Form.Item>
                        </Form>
                    </ConfigProvider>

                </div>

            </Modal>


        </div>

    )

}