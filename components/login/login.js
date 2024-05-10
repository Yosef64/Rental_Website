'use client'
import React, {useRef, useState} from 'react';
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import "./logform.scss"
import Link from 'next/link'
import {  getAuth, signInWithPopup,GoogleAuthProvider,signInWithEmailAndPassword } from "firebase/auth";
import {Button, Checkbox, Form, Input} from "antd";
import { getSession, login } from '@/lib';
import { redirect } from 'next/navigation';



export default function Login(props) {
    
    const ref = useRef("intial");
    const [name, setName] = useState(ref.current);
    const [error, setError] = useState("");
    const [form] = Form.useForm();

    function onFinish(){
        const values = form.getFieldsValue();
        const {email,password} = values;
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in
                const user = userCredential.user;

            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                setError(errorMessage);
            });
    }

    const auth = getAuth();
    auth.languageCode= 'en';
    const analytics = getAnalytics();
    const provider = new GoogleAuthProvider();
    const handleSign = () => {
        signInWithPopup(auth, provider)
            .then( async (result)  => {
                // This gives you a Google Access Token. You can use it to access the Google API.
                const credential = GoogleAuthProvider.credentialFromResult(result);
                
                const user = result.user;
                
                const [name,email,imgUrl]=[ user.displayName,user.email,user.photoURL];
                await login(name,email,imgUrl);
                redirect('/dashboard')
                
            }).catch((error) => {

            const errorCode = error.code;
            const errorMessage = error.message;
        });
    }

    const inputStyle = {
        height:"8vh"
    }
    const googleStyle = {
        width:"60%",
        display:"flex",
        justifyContent:"center",
        alignItems:"center",
        fontSize:"15px",
        height: "7vh",
        fontFamily:'"Poppins",sans-serif',
        fontWeight:"600",
    }
    return (
        <div className="form-container">
            <Form form={form} onFinish={onFinish} className="for"
                name="basic"

                wrapperCol={{
                    offset:2,
                    span: 14,
                }}
                style={{
                    maxWidth: 600,
                    backgroundColor:"#fbfafa",
                    width:"50%",
                    height:"75%",
                    borderRadius:"9px"
                }}
                initialValues={{
                    remember: true,
                }}


                autoComplete="off"
            >

                <Form.Item
                    className="form-item"
                    label="Username"
                    name="username"
                    rules={[
                        {
                            required: true,
                            message: 'Please input your username!',
                        },
                    ]}
                    labelCol={{
                        span: 5,
                        style:{fontFamily:'"Poppins",sans-serif',fontWeight:600}
                    }}
                    style={{marginTop:"30px"}}
                >
                    <Input style={inputStyle}/>
                </Form.Item>
                <Form.Item
                    className="form-item"
                    label="Email"
                    name="email"
                    labelCol={{
                        span: 3,
                        offset:2,
                        style:{fontFamily:'"Poppins",sans-serif',fontWeight:600}
                    }}
                    help={error}
                    validateStatus={error ? "error":""}
                    rules={[
                        {
                            required: true,
                            message: 'Please input your username!',
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
                <Form.Item
                    style={{color:"blue"}}
                wrapperCol={{
                    span:6,
                    offset:10
                }}
                >
                    <Link style={{fontFamily:'"Poppins",sans-serif',fontSize:"12px"}} href="/login/signin">Go to Sign up page </Link>
                </Form.Item>
                <Form.Item
                    wrapperCol={{
                        offset: 8,
                        span: 16,
                    }}
                >
                    <Button style={googleStyle} type="default" htmlType="submit">
                        Log In
                    </Button>
                </Form.Item>
                <Form.Item
                wrapperCol={{
                offset: 8,
                span: 16,
            }}
                >
                <Button onClick={handleSign} style={googleStyle} type="default">
                    <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="35" height="20" viewBox="0 0 48 48">
                        <path fill="#fbc02d" d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12	s5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24s8.955,20,20,20	s20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"></path><path fill="#e53935" d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039	l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"></path><path fill="#4caf50" d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36	c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"></path><path fill="#1565c0" d="M43.611,20.083L43.595,20L42,20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571	c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"></path>
                    </svg>
                    sign in with google
                </Button>
            </Form.Item>
            </Form>


        </div>
    );
}

