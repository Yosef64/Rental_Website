'use client'
import React, {useState} from 'react';
import {Button, ConfigProvider, Input, Layout} from "antd";
import {Content, Header} from "antd/es/layout/layout";
import {FiExternalLink} from "react-icons/fi";
import {Icons} from "next/dist/lib/metadata/types/metadata-types";
import Sider from "antd/es/layout/Sider";
import {EditOutlined, ExportOutlined, SearchOutlined} from "@ant-design/icons";
import "./profile.css";
import { SiderOneComponent, SiderTwoComp} from "@/components/profile/procomp";
import MessageComp, {Help, Stats} from "@/components/profile/procomp2";

export default function Profile({current,children}) {


    const siderStyle={
        width:"10vw",
        backgroundColor: "#dde6ed",
        borderRadius:"20px"
    }
    return (
            <ConfigProvider
                theme={{
                    components:{
                        Layout:{
                            colorBgLayout:"#dde6ed",

                        }
                    }
                }}
                >
                <Layout style={{width:"100%",padding:"13px",height:"100vh"}}>
                    <SiderOneComponent current={current} />
                    <Layout  style={{marginTop:"10px",width:"100%",backgroundColor:"white",overflow:"hidden",height:"97%",borderRadius:"10px"}}>
                        <ConfigProvider
                            theme={{
                                token: {
                                    colorPrimary:"#e0e7ec",
                                    colorText:"#656363",
                                    colorBgBase:"#e0e7ec",
                                    colorTextBase:"#434242",


                                }
                            }}
                        >
                            <Header className="header">
                                <div className="header-item1">
                                <span>
                                    Dashboard
                                </span>
                                    <div style={{display: "flex", alignItems: 'center'}}>


                                        <Input style={{marginRight: "20px", fontWeight: "bold",border:"none"}}
                                               placeholder="search for anything" suffix={<SearchOutlined/>}/>
                                        <Button style={{color: "#555454",border:"none"}} icon={<ExportOutlined style={{fontSize:"12px"}} />}/>


                                    </div>
                                </div>
                                <div className="header-item2">
                                <span>
                                    Profile
                                </span>
                                    <Button style={{border:"none"}} icon={<EditOutlined style={{color: "#757373"}}/>}/>
                                </div>
                            </Header>
                        </ConfigProvider>
                        <Layout style={{padding: "10px", backgroundColor: "white"}}>
                            <Content className="content-one" style={{overflow:"auto",overflowX:"hidden",padding:"10px"}}>
                                {children}
                            </Content>
                            <SiderTwoComp />
                        </Layout>

                    </Layout>
                </Layout>
            </ConfigProvider>


    );
}

