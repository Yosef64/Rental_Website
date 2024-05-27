"use client"
import React from 'react';
import "./contact.css";
import {TextField} from "@mui/material";
import { Button, ConfigProvider } from 'antd';


export default function ContactUs() {
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
            <div className="contact">
                <div className='contact-title'>Contact Us</div>
                <div className="contact-container">
                    <div className="contact-con-left-part" >
                        <div style={{display:"flex",flexDirection:"column",marginBottom:"25px"}}>
                            <span style={{fontSize:"17px",display:"block",fontWeight:"700",fontFamily:"'Poppins',sans-serif",color:"#375277"}}>Get in Touch</span>
                            <span style={{fontSize:"12px",fontFamily:"'Poppins',sans-serif"}}>Fill up the form and our team will get back to you in 24 hours!</span>
                        </div>
                        <form style={{width:"100%"}}  noValidate autoComplete="off">
                            <div style={{display:"flex",justifyContent:"space-between",marginBottom:"20px"}}>
                                <TextField sx={fieldStyle} margin="dense" size="small" InputLabelProps={lableProps} inputProps={textProps}  label="First Name" variant="outlined" />
                                <TextField sx={fieldStyle} margin="dense" size="small" InputLabelProps={lableProps} inputProps={textProps} lable="Last Name" variant="outlined" label="Last Name"/>
                            </div>
                            <div style={{display:"flex",justifyContent:"space-between",marginBottom:"20px"}}>
                                <TextField sx={fieldStyle}  margin="dense" size="small" InputLabelProps={lableProps} inputProps={textProps}  label="Email" variant="outlined" />
                                <TextField  sx={fieldStyle} margin="dense" size="small" InputLabelProps={lableProps} inputProps={textProps} label="Phone No." variant="outlined" />
                            </div>
                            <div style={{width:"100%",marginBottom:"10px"}}>
                                <TextField multiline={true} maxRows={9} sx={{...fieldStyle,width:"100%"}} size="large" InputLabelProps={lableProps} inputProps={{}} label="Message" variant="outlined" fullWidth={true}/>
                            </div>
                            <div>
                                <ConfigProvider
                                theme={{
                                    components:{
                                        Button:{
                                            colorPrimaryHover:"#799f76",
                                        }
                                    },
                                    token:{
                                        colorPrimary:"#6b8f68",
                                        fontFamily:"'Nunito',sans-serif",
                                    }

                                }}
                                >
                                    <Button style={{fontWeight:700,marginTop:"30px",color:"#ece9e9"}} type='primary'>Send Message</Button>
                                </ConfigProvider>
                                
                            </div>

                        </form>
                    </div>

                    <div className="contact-img-part">
                        <img style={{width:"100%",position:"absolute",height:"100%",objectFit:"contain"}} src="/footer/contact.svg" alt="img"/>
                    </div>
                </div>
            </div>
        </div>

    );
}

