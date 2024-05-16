"use client"
import React,{useState,useEffect} from 'react';
import "./c2.scss"
import {listofhouse} from "@/components/center2/listofhouse";
import {Avatar, Button, Card, Col, ConfigProvider, Flex, Pagination, Row, Spin} from "antd";
import Meta from "antd/es/card/Meta";
import {
    ArrowRightOutlined, EditOutlined,
    EllipsisOutlined,
    HeartFilled,
    HeartOutlined,
    HeartTwoTone,
    SettingOutlined,
    createFromIconfontCN, TikTokOutlined, InstagramOutlined
} from "@ant-design/icons";

import {white} from "next/dist/lib/picocolors";
import {dashFetch} from "@/components/dashbord/dashFetch";

export default function Center2(props) {
    const [click, setClick] = useState(false);
    const [list, setList] = useState([])
    const [loading, setLoading] = useState(true);
    const [current, setCurrent] = useState(1);
    const compPerPage = 6;
    const lastIndex = current * compPerPage;
    const firstIndex = lastIndex - compPerPage;
    const records = list.slice(firstIndex,lastIndex);

    const IconFont = createFromIconfontCN({
        scriptUrl: '//at.alicdn.com/t/font_8d5l8fzk5b87iudi.js',
    });
    function handleIcon(id) {
        const updatedList = list.map((user) => {
            if (user.id === id) {
                return { ...user, favourite: !user.favourite };
            }
            return user;
        });

        setList(updatedList);

    }
    const iconStyle = {
        fontSize:"24px",
        position:"absolute",
        right:0,
        padding:"20px"
    };
    useEffect(() => {
        async function getRecent(){
            const {posts} = await dashFetch();

            setList(posts);
            setLoading(false);
        }
        getRecent();
    }, []);
    function handlePage(page){
        setCurrent(page);
    }

    return (
        <div className="cen2">
            <Flex className="c2-container">
                <div className="title">
                    List of Recent Homes
                </div>
                <Spin spinning={loading}>
                    <Row  justify="center" style={{paddingLeft:"10px",}} gutter={[24, 32]}
                    >
                        {
                            list.map((item) => (
                                    <Col key={item.id}  xs={{
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
                                            key={item.id}
                                            style={{
                                                width: 300,

                                            }}
                                            actions={[
                                                <span key={item.id}>
                                                    <img style={{width:"15px",height:"15px"}} key={item.id}
                                                         src="https://www.trulia.com/images/icons/txl3/BedIcon.svg"
                                                         alt="img"/>
                                                    {item.rooms}
                                                </span>

                                                ,
                                                <span key={item.id}>
                                                    <img style={{width:"15px",height:"15px"}} key={item.id}
                                                         src="https://www.trulia.com/images/icons/txl3/BedIcon.svg"
                                                         alt="img"/>
                                                    {item.bath}
                                                </span>,
                                                <span key={item.id}>
                                                    <img style={{width:"15px",height:"15px"}} key={item.id}
                                                         src="https://www.trulia.com/images/icons/txl3/BedIcon.svg"
                                                         alt="img"/>
                                                    {item.area}
                                                </span>,

                                            ]}
                                            cover={
                                                <div>
                                                    {
                                                        item.favourite ? (
                                                                <HeartFilled onClick={() => handleIcon(item.id)}
                                                                             style={{...iconStyle, color: "red"}}/>
                                                            ) :
                                                            (
                                                                <HeartOutlined onClick={()=>handleIcon(item.id)}  style={{...iconStyle,color:"white"}}/>
                                                            )

                                                    }

                                                    <img style={{width: "300px", height: "200px", objectFit: "cover"}}
                                                         src={item.postImgUrl} alt="something"/>
                                                </div>

                                            }

                                        >
                                            <Meta
                                                avatar={<Avatar src={item.userImgUrl}/>}
                                                title={item.title}
                                                description={item.address}

                                            >

                                            </Meta>
                                            <span className="price">${item.price}</span>
                                        </Card>
                                    </Col>
                                )
                            )
                        }

                    </Row>
                </Spin>
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
            </Flex>

        </div>
    );
}

