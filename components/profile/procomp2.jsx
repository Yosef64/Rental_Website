import React, {useRef, useState} from 'react';
import {Avatar, Button, Card, Col, ConfigProvider, Form, Input, List, Row, Statistic} from "antd";
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
        <div style={{display:'flex',alignItems:"center",flexDirection:"column",justifyContent:"space-evenly",height:"80vh",width:"60vw",margin:"auto"}}>
            <div >
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis, eligendi dignissimos mollitia dolorum aliquid possimus voluptatibus magnam ea minus, recusandae at totam, nulla ut odio. Repellat cumque architecto dolores ad!
            </div>
            <ConfigProvider
            theme={{
                components:{
                    Form:{
                        labelColor:"#3f505c",
                        labelFontSize:"15px"
                    }
                },
                token:{
                    fontFamily:"'Poppins',sans-serif"
                }
            }}

            >
                <Form  layout="vertical" style={{backgroundColor:"#dde6ed",width:"30vw",padding:"10px",fontWeight:"600",borderRadius:"10px"}}>
                    <Form.Item  label="Email">
                        <Input size="large" />
                    </Form.Item>
                    <Form.Item label="Message">
                        <TextArea />
                    </Form.Item>
                    <Form.Item>
                        <Button danger={true} type="primary" htmlType="submit" >Report</Button>
                    </Form.Item>
                </Form>
            </ConfigProvider>

        </div>

    )
}
