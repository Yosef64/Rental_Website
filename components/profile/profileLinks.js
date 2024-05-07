import {FacebookFilled, InstagramOutlined, LinkedinFilled, LinkedinOutlined, XOutlined} from "@ant-design/icons";
import Link from "next/link";

export const profileLinks = [
    {
        key:1,
        icon:<FacebookFilled />,
        label:"Facebook",
        children: [
            {
                key:1,
                label:<Link style={{fontSize:"12px",fontWeight:"500"}} href="https://instagram.com/joseph">https://instagram.com/joseph</Link>
            }
        ]
    },
    {
        key:2,
        icon: <LinkedinFilled />,
        label:"LinkedIn",
        children: [
            {
                key:2,
                label:<Link style={{fontSize:"12px",fontWeight:"500"}} href="https://linkedin.com/joseph">https://linkedin.com/joseph</Link>
            }
        ]
    },
    {
        key:3,
        icon:<InstagramOutlined />,
        label:"Instagram",
        children: [
            {
                key:3,
                label:<Link style={{fontSize:"12px",fontWeight:"500"}} href="https://instagram.com/joseph">https://instagram.com/joseph</Link>
            }
        ]
    },
    {
        key:4,
        icon:<XOutlined />,
        label:"Twitter",
        children:[
            {
                key:4,
                label:<Link style={{fontSize:"12px",fontWeight:"500"}} href="https://twitter.com/yoseph">https://twitter.com/yoseph</Link>
            }
        ]
    },
]
