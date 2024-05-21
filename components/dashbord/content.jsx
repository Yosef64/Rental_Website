import React, {useEffect, useState} from 'react';
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
    Row,
    Spin
} from "antd";
import {EnvironmentOutlined, HeartFilled, HeartOutlined} from "@ant-design/icons";
import Meta from "antd/es/card/Meta";
import TextArea from "antd/es/input/TextArea";
import {dashFetch, dashGet, dashPut} from './dashFetch';


export default function Contents() {
    const [list, setList] = useState([]);
    const [current, setCurrent] = useState(1);
    const compPerPage = 6;
    const lastIndex = current * compPerPage;
    const firstIndex = lastIndex - compPerPage;
    const records = list.slice(firstIndex,lastIndex);
    const [info, setInfo] = useState(false);
    const [infoDisplay,setInfoDisplay] = useState({})
    const desc = ['terrible','terrible', 'bad','bad', 'normal','normal', 'good','good', 'wonderful','wonderful']
    const [value, setValue] = useState(null);
    const [form] = Form.useForm();
    const [loading, setLoading] = useState(true);
    const [listFavorite, setListFavorite] = useState([]);
    console.log(listFavorite);
    useEffect(()=>{
        async function setListofHouses(){
           try {
               const {posts} = await dashFetch();
               setList(posts);
               setLoading(false);
           } catch (error){
                message.error("Unable to get Total Posts!");
            }

        }
        async function setFavourite(){
            try {
                const {Find} = await dashGet();
                console.log("Find",Find);
                const {favourites} = Find;
                setListFavorite(favourites);
            }catch (error){
                message.error("unable to fetch favourites from database!")
            }

        }
        setListofHouses();
        setFavourite();
    },[])
    // console.log(list);
    function handlePage(page){
        setCurrent(page);
    }
    const iconStyle = {
        fontSize:"24px",
        position:"absolute",
        right:0,
        padding:"20px"
    };

    async function handleIcon(id) {
        let updatedListFavourite;
        if (listFavorite.includes(id)){

            const updatedListFavourite = listFavorite.filter(ele=> ele !== id);
            setListFavorite(updatedListFavourite);
        }else {
            updatedListFavourite = [id,...listFavorite]
            setListFavorite(updatedListFavourite);
        }

        await dashPut(updatedListFavourite);
    }
    function handleDisplay(item) {

        setInfo(true);
        const info = {img:item.postImgUrl,desc: item.description,title: item.title,price: item.price,address: item.address,bath:item.bath,rooms:item.rooms,area:item.area}
        setInfoDisplay(info);
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
        <Spin spinning={loading} size='large'>
            <Flex justify="center"  className="c2-container">
                <Row gutter={[48,24]} >
                    {
                        records.map((item) => (
                                <Col key={item.id} xs={{
                                    flex: '100%',
                                }}
                                     sm={{
                                         flex: '50%',
                                     }}
                                     md={{
                                         flex: '40%',
                                     }}
                                     lg={{
                                         flex: '20%',
                                     }}
                                     xl={{
                                         flex: '10%',
                                     }}>
                                    <Card


                                        hoverable
                                        key={item.userImgUrl}
                                        style={{width:270}}
                                        cover={
                                            <div>
                                                {
                                                    listFavorite.includes(item.id) ?(
                                                            <HeartFilled key={item.id} onClick={()=>handleIcon(item.id)} style={{...iconStyle,color:"red"}} />
                                                        ) :
                                                        (
                                                            <HeartOutlined key={item.id} onClick={()=>handleIcon(item.id)}  style={{...iconStyle,color:"white"}}/>
                                                        )

                                                }

                                                <img style={{width: "100%", height: "150px", objectFit: "cover"}}
                                                     src={item.postImgUrl} alt="something"/>
                                            </div>

                                        }

                                    >
                                        <Meta
                                            onClick={()=>handleDisplay(item)}
                                            avatar={<Avatar src={item.userImgUrl}/>}
                                            title={item.title}
                                            description={<label style={{height:"1vh"}}><EnvironmentOutlined /> {item.address}</label>}


                                        >

                                        </Meta>
                                        <span className="price">${item.price}</span>
                                    </Card>
                                </Col>
                            )
                        )
                    }
                </Row>
            </Flex>

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
            <Modal visible={true} style={{backgroundColor:"black"}} okButtonProps={{style:{backgroundColor:"#6a9567",border:"none"}}} onCancel={handleInfoCancel} onOk={handleInfo} className="modal-two" bodyStyle={{maxHeight:"70vh",width:"100%",overflowY:"auto",overflowX:"hidden",scrollbarWidth:"none",backgroundColor:"#dde6ed",padding:"10px",borderRadius:"10px"}}   title="Info" width={1000}  open={info}>
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
                              onFinish={onFinish}
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

        </Spin>

    );
}

