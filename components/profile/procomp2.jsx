import React, {useRef, useState} from 'react';
import {Avatar, Card, Col, ConfigProvider, Form, Input, List, Row, Statistic} from "antd";
import emailjs from '@emailjs/browser';
import {ArrowDownOutlined, ArrowUpOutlined} from "@ant-design/icons";
import TextArea from "antd/es/input/TextArea";


export default function MessageComp(props) {
    const form = useRef();
    const [info, setInfo] = useState({user_name:"",user_email:"",message:""})
    const data = [
        {
            title: 'Ant Design Title 1',
        },
        {
            title: 'Ant Design Title 2',
        },
        {
            title: 'Ant Design Title 3',
        },
        {
            title: 'Ant Design Title 4',
        },
    ];



    return (
        <List dataSource={data} layout="horizontal"

        renderItem={(item,index)=>(
            <List.Item>
                <List.Item.Meta
                    avatar={<Avatar src={`https://api.dicebear.com/7.x/miniavs/svg?seed=${index}`} />}
                    title={<a href="https://ant.design">{item.title}</a>}
                    description="Ant Design, a design language for background applications, is refined by Ant UED Team"
                />

            </List.Item>
        )}
        >

        </List>
    );
}
export function Help(){
    const form = useRef();
    return (
        <Form style={{backgroundColor:""}}>
            <Form.Item label="Email">
                <Input />
            </Form.Item>
            <Form.Item label="Message">
                <TextArea />
            </Form.Item>
        </Form>
    )
}
