import {
    CalendarOutlined, ControlOutlined,
    DollarOutlined,
    EnvironmentOutlined,
    HomeOutlined,
    MailOutlined,
    TeamOutlined
} from "@ant-design/icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faBookmark} from "@fortawesome/free-solid-svg-icons";
import {Button, Dropdown, Menu} from "antd";

export const locationList = [
    {
        id:1,
        name:"Addis Ababa",

    },
    {
        id:2,
        name:"Addis Ababa",

    },
    {
        id:3,
        name:"Bishoftu",
        lable:(<lable>Bishoftu</lable>)
    },
    {
        id:4,
        name:"Bahir Dar",

    },
    {
        id:5,
        name:"Gondor",
    },
    {
        id:6,
        name:"Mojo",

    },
]
export const priceList = [
    {
        id:1,
        price:"100-1000",
        lable:(<lable>100-1000</lable>)
    },
    {
        id:2,
        price:"1000-1500",
        lable:(<lable>1000-1500</lable>)
    },
    {
        id:3,
        price:"1600-2000",
        lable:(<lable>1600-2000</lable>)
    },
    {
        id:4,
        price:"2100-2500",
        lable:(<lable>2100-2500</lable>)
    },
    {
        id:5,
        price:"2600-3000",
        lable:(<lable>2600-3000</lable>)
    },
]
export const capacity = [

    {
        id:1,
        able:"1 person",
        lable:(<lable>1 person</lable>)
    },
    {
        id:2,
        able:"2-5 person",
        lable:(<lable>2-5 person</lable>)
    },
    {
        id:3,
        able:"5-8 person",
        lable:(<lable>5-8</lable>)
    },
    {
        id:4,
        able:"8 above",
        lable:(<lable>8-above</lable>)
    },

]
export const houseType = [
    {
        id:1,
        type:"Normal villa",
        lable:(<lable>Normal villa</lable>)
    },
    {
        id:2,
        type:"Luxury villa",
        lable:(<lable>Luxury villa</lable>)
    },
    {
        id:3,
        type:"Apartment",
        lable:(<lable>Apartment</lable>)
    },
    {
        id:4,
        type:"Norma house",
        lable:(<lable>Normal house</lable>)
    },
]
export const siderList = [
    {
        key:1,
        icon:<HomeOutlined style={{fontSize:"17px"}}/>,
        title:"Home"
    },
    {
        key:2,
        icon:<MailOutlined style={{fontSize:"17px"}}/>,
        title:"Message"
    },
    {
        key:3,
        icon:<CalendarOutlined style={{fontSize:"17px"}}/>,
        title: "calendar"
    },
    {
        key: 4,
        icon: <FontAwesomeIcon style={{fontSize:"17px"}} icon={faBookmark}/>,
        title:"Favourites"
    }
]
export async function onFinish(){
    
}