import React from 'react';
import {Col, Row} from "antd";
import "./teams.css"
const teams = [
    {
        id:1,
        name:"Suzan Albert",
        title:"Finance,JoRent",
        img:"/teams/suzan.jpeg"
    },
    {
        id:2,
        name:"Yoseph Alemu",
        title:"CEO,JoRent",
        img:"/teams/yoseph.jpg"
    },
    {
        id:3,
        name:"John Williams",
        title:"Social Media,JoRent",
        img:"/teams/wiliams.jpeg"
    },
    {
        id:4,
        name:"Mohammed Ahmed",
        title:"SE,JoRent",
        img:"/teams/mohammed.jpeg"
    },
    {
        id:5,
        name:"Vladimir Scheleschov",
        title:"SE,JoRent",
        img:"/teams/viladmin.jpg"
    },
    {
        id:6,
        name:"Jonas Arthur",
        title:"Director,JoRent",
        img:"/teams/jonas.jpg"
    },
]
export default function Teams(props) {
    return (
        <div className="teams">
            <div className="team-beg">Our Teams</div>
            <Row justify="space-between" gutter={[8, 32]}>
                {
                    teams.map((team) => (
                        <Col
                            key={team.id}
                            span={8}
                            xs={{ span: 24 }}    // Full width on extra small screens
                            sm={{ span: 12 }}    // Half width on small screens
                            md={{ span: 12 }}     // 9/24 of the width on medium screens
                            lg={{ span: 8 }}     // Approximately 20% on large screens
                            xl={{ span: 8 }}     // Approximately 10% on extra large screens
                        >
                            <div className="team-con">
                                <div className="team-mem">
                                    <img src={team.img} alt="img"/>
                                </div>
                                <div className="about-team-mem">
                                    <span className="team-mem-name">{team.name}</span>
                                    <span className="team-mem-title">{team.title}</span>
                                </div>
                            </div>
                        </Col>
                    ))
                }
            </Row>

        </div>
    );
}

