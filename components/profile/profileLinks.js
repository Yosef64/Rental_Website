import {FacebookFilled, InstagramOutlined, LinkedinFilled, LinkedinOutlined, XOutlined} from "@ant-design/icons";
import Link from "next/link";
import {handleGetSession} from "@/components/login/logGoogle";
import {message} from "antd";

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
export async function fetchFavourite(){
    try {
        const {user} = await handleGetSession();
        const {email} = user;
        console.log("dbId", email)
        const res = await fetch(`http://localhost:3000/api/users/${email}`);
        const {Find} = await res.json();
        console.log("Find", Find);
        const {favourites} = Find;


        const list = [];
        await Promise.all(favourites.map(async (item) => {
            console.log("Fav", item)
            const postRes = await fetch(`http://localhost:3000/api/posts/${item}`);
            const {post} = await postRes.json();
            //
            if (post.length !== 0) {
                console.log("userPost", post);
                list.push(post)
            }
        }));
        console.log("list", list);
        return {list};
    }catch (error){
        message.error("Unable to get list of Favourites");
    }
}
