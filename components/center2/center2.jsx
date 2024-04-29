"use client"
import React,{useState} from 'react';
import "./c2.scss"
import {listofhouse} from "@/components/center2/listofhouse";
import {Avatar, Button, Card, Col, Flex, Row} from "antd";
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

export default function Center2(props) {
    const [click, setClick] = useState(false);
    const [list, setList] = useState(listofhouse)

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

    return (
        <div className="cen2">
            <Flex className="c2-container">
                <div className="title">
                    List of Recent Homes
                </div>
                <Row style={{paddingLeft:"10px"}} gutter={[16, 32]}
                >
                    {
                        list.map((item) => (
                            <Col key={item.id} span={8}>
                                <Card
                                    hoverable
                                    key={item.id}
                                    style={{
                                        width: 300,
                                    }}
                                    actions={[
                                        <IconFont style={{fontSize:"18px"}} key="" type="icon-facebook"/>,
                                        <IconFont style={{fontSize:"18px"}} key="" type="icon-twitter" />,
                                        <TikTokOutlined style={{fontSize:"18px"}} key="tiktok"/>,
                                        <InstagramOutlined style={{fontSize:"18px"}} key="instagram" />
                                    ]}
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

                                            <img style={{width: "300px", height: "200px", objectFit: "cover"}}
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
                <Button className="button" type="primary"> Next <ArrowRightOutlined style={{fontSize:"16px"}}/> </Button>
            </Flex>
        </div>
    );
}

