"use client"
import React, {useRef} from 'react';
import "./lgf.css"
import {Button, Checkbox, ConfigProvider, Divider, Form, Input, Modal} from "antd";
import {LockOutlined, UserOutlined} from "@ant-design/icons";
import {handleSign} from "@/components/login/logGoogle";
export default function Login() {

    const [modal, contextHolder] = Modal.useModal();
    function handleIn (){
        const instance = modal.success({
            title: 'Warning',
            content: `Please sign in with Google.`,
        });

        setTimeout(() => {

            instance.destroy();
        },  3000);
    }
    return (
        <div className="login">
            <div className="login-container">
                <div className="photo-part">
                    <img src="/about/firsthouse.jpg" alt="img" />
                </div>
                <div className="form-part">
                    <div className="f-p-con">
                        <div className="f-p-f">
                            <span className="signin-top-title">Sign In to your account</span>
                            <span className="signin-top-label">Enter your details to proceed further</span>
                        </div>
                        <div className="f-p-s">
                            <ConfigProvider
                            theme={{
                                components:{
                                    Input:{
                                        size:"large",
                                    },
                                    Button:{
                                        fontSize:"17px"
                                    }
                                },
                                token:{
                                    colorSplit:"#555353",
                                    fontFamily:"'Nunito',sans-serif",
                                    colorPrimary:"#6b8f68"
                                }
                            }}

                            >
                                <Form labelCol={{style:{fontWeight:800,color:"#3f4b83 !important"}}} layout="vertical">
                                    <Form.Item label="Email">
                                        <Input size="large" suffix={<LockOutlined style={{color:"#686767"}} />}/>
                                    </Form.Item>
                                    <Form.Item label="Password">
                                        <Input.Password size="large"/>
                                    </Form.Item>
                                    <Form.Item>
                                        <Checkbox>Remember me</Checkbox>
                                        <a style={{float:"right"}} href="/">Forgot Password?</a>
                                    </Form.Item>
                                    <Form.Item>
                                        <Button onClick={handleIn} style={{width:"100%",fontWeight:800,color:"#ffffff"}} type="primary">

                                            Sign In
                                        </Button>
                                    </Form.Item>
                                    <Form.Item style={{textAlign:"center",marginBottom:"0 !important"}}>
                                        <a  href="/login/signin">
                                            Create an account
                                        </a>
                                    </Form.Item>
                                </Form>
                                <Divider plain>or</Divider>
                            </ConfigProvider>
                            <div className="sign-in-opt">
                                <ConfigProvider
                                theme={{
                                    components:{
                                        Button:{
                                            colorPrimaryHover:"#292c3a"
                                        }
                                    }
                                }}
                                >
                                    <Button size="large" style={{width:"100%"}} type="default" onClick={handleSign}>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20"
                                             preserveAspectRatio="xMidYMid" viewBox="0 0 256 262" id="google">
                                            <path fill="#4285F4"
                                                  d="M255.878 133.451c0-10.734-.871-18.567-2.756-26.69H130.55v48.448h71.947c-1.45 12.04-9.283 30.172-26.69 42.356l-.244 1.622 38.755 30.023 2.685.268c24.659-22.774 38.875-56.282 38.875-96.027"></path>
                                            <path fill="#34A853"
                                                  d="M130.55 261.1c35.248 0 64.839-11.605 86.453-31.622l-41.196-31.913c-11.024 7.688-25.82 13.055-45.257 13.055-34.523 0-63.824-22.773-74.269-54.25l-1.531.13-40.298 31.187-.527 1.465C35.393 231.798 79.49 261.1 130.55 261.1"></path>
                                            <path fill="#FBBC05"
                                                  d="M56.281 156.37c-2.756-8.123-4.351-16.827-4.351-25.82 0-8.994 1.595-17.697 4.206-25.82l-.073-1.73L15.26 71.312l-1.335.635C5.077 89.644 0 109.517 0 130.55s5.077 40.905 13.925 58.602l42.356-32.782"></path>
                                            <path fill="#EB4335"
                                                  d="M130.55 50.479c24.514 0 41.05 10.589 50.479 19.438l36.844-35.974C195.245 12.91 165.798 0 130.55 0 79.49 0 35.393 29.301 13.925 71.947l42.211 32.783c10.59-31.477 39.891-54.251 74.414-54.251"></path>
                                        </svg>
                                        Sign In with Google</Button>
                                </ConfigProvider>

                            </div>

                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}

