"use client"
import React, {useState} from 'react';
import "./contact.css";
import {TextField} from "@mui/material";
import {Button, ConfigProvider, notification} from 'antd';
import {MehOutlined, SmileOutlined} from "@ant-design/icons";


export default function ContactUs() {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        message: ''
    });
    const [api, contextHolder] = notification.useNotification();

    const openNotification = (placement,desc,isWarning) => {
        api.info({
            message: <p style={{color:isWarning ?"red":"green",fontWeight:"600",fontFamily:"'Poppins',sans-serif"}}>{isWarning ? "Warning!":"Success!"}</p>,
            description:
                <p style={{fontFamily:"'Poppins',sans-serif"}}>{desc}</p>,
            placement,
            icon: (
                isWarning ?
                    <SmileOutlined
                        style={{
                            color: 'red',
                        }}
                    />:<MehOutlined style={{color:"green"}}/>
            ),
        });
    };
    const [error, setError] = useState("");

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        const phonePattern = /^(\+\d{1,2}\s?)?(\(?\d{3}\)?[\s.-]?)?\d{3}[\s.-]?\d{4}$/;
        const isPhone = phonePattern.test(formData.phone);
        const isEmail = emailPattern.test(formData.email)
        const con =  isEmail && isPhone;
        if (!isPhone){
            setError("phone")
        }
        if (!isEmail) setError("email")
       if(con){
           setError("")
           openNotification("bottomRight","We'll get back to you soon!",false);
       }

    };

    const textProps = {
        sx:{
            width:"100%",
            fontFamily:"'Poppins',sans-serif",
            color:"#807e7e",
            fontWeight: 500,
            fontSize:"14px"

        }
    }
    const fieldStyle = {
        marginRight:"10px",'& .MuiOutlinedInput-root': {
            '& fieldset': {
                // border: "#4d9de3 2px solid",

            },
            '&:hover fieldset': {
                border: "#4d9de3 2px solid",

            }
        },
        width:"48%"
    }
    const lableProps = {
        sx: {
            fontFamily: "'Poppins', sans-serif",
            fontWeight: 600,
            fontSize:"13px",
            color:"#3a4d75",
            '&.Mui-focused': {
                fontSize: '15px',
            },
        },

    }
    return (
        <div id='contact-us'>
            {contextHolder}
            <div className="contact">
                <div className='contact-title'>Contact Us</div>
                <div className="contact-container">
                    <div className="contact-con-left-part">
                        <div style={{display: "flex", flexDirection: "column", marginBottom: "25px"}}>
                            <span style={{
                                fontSize: "17px",
                                display: "block",
                                fontWeight: "700",
                                fontFamily: "'Poppins',sans-serif",
                                color: "#375277"
                            }}>Get in Touch</span>
                            <span style={{fontSize: "12px", fontFamily: "'Poppins',sans-serif"}}>Fill up the form and our team will get back to you in 24 hours!</span>
                        </div>
                        <form onSubmit={handleSubmit} style={{width: "100%"}} noValidate={false} autoComplete="off">
                            <div style={{display: "flex", justifyContent: "space-between", marginBottom: "20px"}}>
                                <TextField required sx={fieldStyle} margin="dense" size="small"
                                           error={error === "firstName"}
                                           helperText={error==="firstName" && "Please provide your first name"}
                                           InputLabelProps={lableProps}
                                           inputProps={textProps} label="First Name" variant="outlined"
                                           name="firstName" value={formData.firstName} onChange={handleChange}/>
                                <TextField required sx={fieldStyle} margin="dense" size="small"
                                           error={error === "lastName"}
                                           helperText={error==="lastName" && "Please provide your last name"}
                                           InputLabelProps={lableProps}
                                           inputProps={textProps} label="Last Name" variant="outlined"
                                           name="lastName" value={formData.lastName} onChange={handleChange}/>
                            </div>
                            <div style={{display: "flex", justifyContent: "space-between", marginBottom: "20px"}}>
                                <TextField required sx={fieldStyle} margin="dense" size="small"
                                           error={error === "email"}
                                           helperText={error==="email" && "Please provide correct email"}
                                           InputLabelProps={lableProps}
                                           inputProps={textProps} label="Email" variant="outlined"
                                           name="email" value={formData.email} onChange={handleChange}/>
                                <TextField required sx={fieldStyle} margin="dense" size="small"
                                           error={error === "phone"}
                                           helperText={error==="phone" && "Please insert correct  phone no."}
                                           InputLabelProps={lableProps}
                                           inputProps={textProps} label="Phone No." variant="outlined"
                                           name="phone" value={formData.phone} onChange={handleChange}/>
                            </div>
                            <div style={{width: "100%", marginBottom: "10px"}}>
                                <TextField required  multiline maxRows={9} sx={{...fieldStyle, width: "100%"}} size="large"

                                           InputLabelProps={lableProps}
                                           label="Message" variant="outlined" fullWidth
                                           name="message" value={formData.message} onChange={handleChange}/>
                            </div>
                            <div>
                                <ConfigProvider
                                    theme={{
                                        components: {
                                            Button: {
                                                colorPrimaryHover: "#799f76",
                                            }
                                        },
                                        token: {
                                            colorPrimary: "#6b8f68",
                                            fontFamily: "'Nunito',sans-serif",
                                        }
                                    }}
                                >
                                    <Button style={{fontWeight: 700, marginTop: "30px", color: "#ece9e9"}}
                                            type='primary' htmlType="submit">
                                        Send Message
                                    </Button>
                                </ConfigProvider>
                            </div>
                        </form>
                    </div>

                    <div className="contact-img-part">
                        <img style={{width: "100%", position: "absolute", height: "100%", objectFit: "contain"}}
                             src="/footer/contact.svg" alt="img"/>
                    </div>
                </div>
            </div>
        </div>

    );
}

