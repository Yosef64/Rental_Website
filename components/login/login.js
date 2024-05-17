"use client"


import "./logform.scss"
import Link from 'next/link'
import {Button, Checkbox, ConfigProvider, Divider, Form, Input} from "antd";

import { handleSign,handleSession } from "./logGoogle";
import { redirect } from "next/navigation";
import { useEffect } from "react";
import { useRouter } from "next/navigation";



export  default function Login(props) {
    const router = useRouter();
    handleSession().then((result)=>{
        if(result===true){
            console.log(result);
            router.push('/dashboard')
        }
    })
    const inputStyle = {
        height:"8vh"
    }
    const googleStyle = {
        width:"50%",
        display:"flex",
        justifyContent:"center",
        alignItems:"center",
        fontSize:"15px",
        height: "7vh",
        fontFamily:'"Montserrat",sans-serif',
        fontWeight:"600",
    }
    return (
        <div className="form-container">
            <img src="/bglogin.jpg" alt="img" style={{position:"absolute",right:"0",height:"100%",top:"0",left:"0",width:"100vw",bottom:'0',opacity:"0.7"}} />
            <Form  className="for"
                name="basic"

                wrapperCol={{
                    offset:2,
                    span: 14,
                }}
                style={{
                    maxWidth: 600,
                    width:"50%",
                    height:"60%",
                    borderRadius:"9px",

                }}
                initialValues={{
                    remember: true,
                }}


                autoComplete="on"
            >
                

                <Form.Item
                    className="form-item"
                    label="Email"
                    name="email"
                    labelCol={{
                        span: 3,
                        offset:2,
                        style:{fontFamily:'"Poppins",sans-serif',fontWeight:600,color:"white"}
                    }}
                    // help={error}
                    // validateStatus={error ? "error":""}
                    rules={[
                        {
                            required: true,
                            message: 'Please input your Email!',
                        },
                    ]}
                    style={{marginTop:"30px"}}
                >
                    <Input style={inputStyle}/>
                </Form.Item>
                <Form.Item
                    className="form-item"
                    label="Password"
                    name="password"
                    labelCol={{
                        span: 5,
                        style:{fontFamily:'"Poppins",sans-serif',fontWeight:600}
                    }}
                    rules={[
                        {
                            required: true,
                            message: 'Please input your password!',
                        },
                    ]}
                >
                    <Input.Password style={inputStyle} />
                </Form.Item>
                <ConfigProvider
                theme={{
                    token:{
                        colorPrimary:"#67a662"
                    }
                }}
                >
                    <Form.Item
                        wrapperCol={{
                            offset: 8,
                            span: 16,
                        }}
                    >
                        <Button style={googleStyle} type="primary" htmlType="submit">
                            Log In
                        </Button>
                    </Form.Item>
                </ConfigProvider>
                <Divider style={{color:"white",fontFamily:"verdana,sans-serif",fontSize:"12px",borderColor:"#b3afaf"}}> or Signin with</Divider>
                <Form.Item
                wrapperCol={{
                offset: 11,

            }}
                >
                <Button shape="circle" onClick={handleSign}  type="default">
                    <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="35" height="20" viewBox="0 0 48 48">
                        <path fill="#fbc02d" d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12	s5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24s8.955,20,20,20	s20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"></path><path fill="#e53935" d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039	l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"></path><path fill="#4caf50" d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36	c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"></path><path fill="#1565c0" d="M43.611,20.083L43.595,20L42,20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571	c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"></path>
                    </svg>

                </Button>
            </Form.Item>
            </Form>


        </div>
    );
}

