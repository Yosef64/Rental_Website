import React from 'react';
import {Card, Col, Row} from "antd";
import "./creed.css"
const list = [
    {
        id:1,
        img:"/about/shield.png",
        title:"Trust",
        desc:"Whether you're a first-time homebuyer or a seasoned investor, we're here to help you navigate\n" +
            "                            the complex world of real estate. Explore our website to browse our current listings."
    },
    {
        id:2,
        img:"/about/passion.png",
        title:"Passion",
        desc:"Whether you're a first-time homebuyer or a seasoned investor, we're here to help you navigate\n" +
            "                            the complex world of real estate. Explore our website to browse our current listings."
    },
    {
        id:3,
        img:"/about/exellent.png",
        title:"Excellence",
        desc:"Whether you're a first-time homebuyer or a seasoned investor, we're here to help you navigate\n" +
            "                            the complex world of real estate. Explore our website to browse our current listings."
    },
    {
        id:4,
        img:"/about/idea.png",
        title:"Creating Solutions",
        desc:"Whether you're a first-time homebuyer or a seasoned investor, we're here to help you navigate\n" +
            "                            the complex world of real estate. Explore our website to browse our current listings."
    },
]
export default function Creed(props) {
    return (
        <div className="creed">
            <div className="creed-name">Our Creed</div>
            <Row gutter={[24,32]}>
                {list.map((item) => (
                        <Col key={item.id}
                             sm={{ span: 12 }}    // Half width on small screens
                             md={{ span: 8 }}     // 9/24 of the width on medium screens
                             lg={{span:6}}     // Approximately 20% on large screens
                             xl={{ span: 6 }}
                        >
                            <div className="creed-card">
                                <div className="creed-card-img">
                                    <img style={{backgroundColor: "inherit", width: "50px", height: "50px"}}
                                         src={item.img} alt="img"/>
                                </div>
                                <div className="creed-card-title">{item.title}</div>
                                <div className="creed-card-desc">
                                    {item.desc}
                                </div>
                            </div>
                        </Col>
                    ))

                }
            </Row>
        </div>
    );
}

