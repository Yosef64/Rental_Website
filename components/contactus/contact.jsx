"use client"
import React from 'react';
import {Form, Input, Space} from "antd";

export default function ContactUs(props) {
    return (
        <Space direction="vertical" size="large" style={{display:"flex",justifyContent:"center",margin:"auto",alignItems:'center',backgroundColor:"white"}} className="contact">
            <div>Contact Us</div>
            <Space className="contact-container">
                <div>
                    <div>
                        <span>Get in Touch</span>
                        <span>Fill up the form and our team will get back to you in 24 hours!</span>
                    </div>
                    <Form mode="vertical">
                        <Form.Item>
                            <Form.Item label="First Name">
                                <Input />
                            </Form.Item>
                            <Form.Item>

                            </Form.Item>
                        </Form.Item>
                    </Form>
                </div>

                <div style={{width:"20vw",backgroundColor:"#b6cbf6",borderRadius:"10px"}}>
                    <img src="/footer/contact.svg" alt="img"/>
                </div>
            </Space>
        </Space>
    );
}

