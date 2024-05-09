import React, {useState} from 'react';
import {Content} from "antd/es/layout/layout";
import {listofhouse} from "@/components/center2/listofhouse";
import {
    Avatar,
    Button,
    Card,
    Col,
    ConfigProvider,
    Flex,
    Form,
    Image,
    Input,
    message,
    Modal,
    Pagination,
    Rate,
    Row
} from "antd";
import {EnvironmentOutlined, HeartFilled, HeartOutlined, InstagramOutlined, TikTokOutlined} from "@ant-design/icons";
import Meta from "antd/es/card/Meta";
import TextArea from "antd/es/input/TextArea";


export default function Contents(props) {
    const [list, setList] = useState(listofhouse);
    const [current, setCurrent] = useState(1);
    const compPerPage = 6;
    const lastIndex = current * compPerPage;
    const firstIndex = lastIndex - compPerPage;
    const records = list.slice(firstIndex,lastIndex);
    const [info, setInfo] = useState(false);
    const [infoDisplay,setInfoDisplay] = useState({img:null,title:null,desc:"",price:"",address:""})
    const desc = ['terrible','terrible', 'bad','bad', 'normal','normal', 'good','good', 'wonderful','wonderful']
    const [value, setValue] = useState(null);
    const [form] = Form.useForm();

    function handlePage(page){
        setCurrent(page);
    }
    const iconStyle = {
        fontSize:"24px",
        position:"absolute",
        right:0,
        padding:"20px"
    };
    function handleIcon(id) {
        const updatedList = list.map((user)=>{
            if(user.id===id){
                return {...user,favourite:!user.favourite}
            }
            return user;
        })
        setList(updatedList);
    }
    function handleDisplay(item) {

        setInfo(true);
        console.log(item);
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
        <>
            <Row gutter={[60,24]} >
                {
                    records.map((item) => (
                        <Col key={item.id} span={8}>
                            <Card
                                onClick={()=>handleDisplay(item)}
                                hoverable
                                key={item.id}

                                cover={
                                    <div>
                                        {
                                            item.favourite ?(
                                                    <HeartFilled onClick={()=>handleIcon(item.id)} style={{...iconStyle,color:"red"}} />
                                                ) :
                                                (
                                                    <HeartOutlined onClick={()=>handleIcon(item.id)}  style={{...iconStyle,color:"white"}}/>
                                                )

                                        }

                                        <img style={{width: "100%", height: "150px", objectFit: "cover"}}
                                             src={item.img} alt="something"/>
                                    </div>

                                }

                            >
                                <Meta
                                    avatar={<Avatar src={item.avatar}/>}
                                    title={item.title}
                                    description={<label><EnvironmentOutlined/> {item.address}</label>}

                                >

                                </Meta>
                                <span className="price">${item.price}</span>
                            </Card>
                        </Col>
                        )
                    )
                }
            </Row>
            <div className="pagination">
                <ConfigProvider
                    theme={
                        {
                            token: {
                                colorBgContainer: '#6a9567',
                                colorPrimary:"#fff"
                            }
                        }
                    }
                >
                    <Pagination pageSize={6} current={current} onChange={handlePage} total={list.length}/>
                </ConfigProvider>

            </div>
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
                        <Form layout="vertical"
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

        </>

    );
}

