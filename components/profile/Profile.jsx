import React from 'react';
import {Layout} from "antd";
import {Content, Header} from "antd/es/layout/layout";
import Sider from "antd/es/layout/Sider";

export default function Profile(props) {
    const headerStyle = {
        backgroundColor:"green",

    }
    const siderStyle={
        width:"10vw",
        backgroundColor: "black",
        borderRadius:"20px"
    }
    return (

            <Layout style={{width:"100vw",padding:"2px",height:"100vh"}}>
                <Sider style={siderStyle}>

                </Sider>
                <Layout style={{padding:"20px",width:"100%",height:"100%"}}>
                    <Header>

                    </Header>
                    <Layout>
                        <Content style={{width:"40vw",backgroundColor:"red"}}>

                        </Content>
                        <Sider style={siderStyle}>

                        </Sider>
                    </Layout>

                </Layout>
            </Layout>

    );
}

