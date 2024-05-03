import React, {useState} from 'react';
import {Content} from "antd/es/layout/layout";
import {listofhouse} from "@/components/center2/listofhouse";
import {Avatar, Card, Col, ConfigProvider, Pagination, Row} from "antd";
import {HeartFilled, HeartOutlined, InstagramOutlined, TikTokOutlined} from "@ant-design/icons";
import Meta from "antd/es/card/Meta";


export default function Contents(props) {
    const [list, setList] = useState(listofhouse);
    const [current, setCurrent] = useState(1);
    const compPerPage = 6;
    const lastIndex = current * compPerPage;
    const firstIndex = lastIndex - compPerPage;
    const records = list.slice(firstIndex,lastIndex);
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

    return (
        <>
            <Row gutter={[60,24]} >
                {
                    records.map((item) => (
                        <Col key={item.id} span={8}>
                            <Card
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
                                    description={item.desc}

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
        </>

    );
}

