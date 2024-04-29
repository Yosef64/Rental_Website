import React from 'react';
import "./footer.scss";
import {fotlists} from "@/components/footer/fotcon";
import {Button, Divider, Flex} from "antd";
import {
    ArrowRightOutlined,
    FacebookFilled,
    InstagramFilled, InstagramOutlined,
    LinkedinFilled, LinkedinOutlined,
    TwitterOutlined,
    YoutubeFilled
} from "@ant-design/icons";

export default function Footer(props) {
    const styleButton = {
        width:"10vw",
        height:"7vh",
        gap:"2px",
        fontWeight:"600",
        fontSize:"12px",
        backgroundColor:"#6b8f68",
        fontFamily:'"Montserrat",sans-serif'}
    const styleCopy= {
        paddingLeft:"20px",
        color:"#707070",
        fontFamily: '"Montserrat",sans-serif',
        fontSize: "13px"
    }
    return (
        <div className="footer">
            <div className="fot-container">
                <div className="fot-con-f">
                    <img alt="img" src="/footer/visit.svg"/>
                </div>
                <div className="fot-con-s">
                    <p>Get Involved finding a best house</p>
                    <Button style={styleButton} type="primary">Find <ArrowRightOutlined style={{fontSize:"12px"}} /></Button>
                </div>
                <Flex style={{width:"50vw"}} align="start" justify="space-around">
                    {
                        fotlists.map((fotlist) => (
                            <Flex vertical className="fot-child" key={fotlist.id}>
                                <span className="f-c-c1">{fotlist.about}</span>
                                {fotlist.list.map((item) => (
                                    <span className="f-c-c" key={item.id}>
                                        <a href={item.href}>{item.title}</a>
                                    </span>
                                ))}
                            </Flex>
                        ))
                    }
                </Flex>

            </div>
            <div className="fot-final">
                <span style={styleCopy}>
                    <span>&#169;</span> 2024 Inc. All right reserved.
                </span>
                {/*<Divider></Divider>*/}
                <div className="icon-con">
                    <TwitterOutlined className="icon" />
                    <FacebookFilled className="icon"/>
                    <LinkedinOutlined className="icon" />
                    <YoutubeFilled className="icon" />
                    <InstagramOutlined className="icon" />
                </div>
            </div>
        </div>
    );
}

