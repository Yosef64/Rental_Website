'use server'
import { db } from "@/fireconfig/fireBaseConfig";
import { message } from "antd";
import {addDoc, collection, doc, getDocs, updateDoc} from "firebase/firestore";
import { NextResponse } from "next/server";

export async function GET(request){
    const refPosts = await getDocs(collection(db,"posts"));
    const posts = [];
    refPosts.forEach((doc)=>{
        posts.push({id:doc.id,...doc.data()});
    })

    return NextResponse.json({posts});
}

export async function POST(request) {
    const { address, title, description, rooms, bath, userImgUrl, postImgUrl, price, area,email,ratedUser,totalRating } = await request.json();
    
    // console.log(address,title);
    const post = { "address":address, "title":title, "description":description, "rooms":rooms, "bath":bath, "userImgUrl":userImgUrl, "postImgUrl":postImgUrl, "price":price, "area":area,"email":email,ratedUser,totalRating};
    // console.log(post);
    const docRef = await addDoc(collection(db, 'posts'), { ...post });

    const postId = docRef.id;
    const updateRef = doc(db,"posts",postId);
     await updateDoc(updateRef,{
        id:postId
    })

    return NextResponse.json({message:"the information is posted!"})
}