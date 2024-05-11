'use server'
import { db } from "@/fireconfig/fireBaseConfig";
import { message } from "antd";
import { addDoc, collection, doc, getDocs } from "firebase/firestore";
import { NextResponse } from "next/server";

export async function GET(request){
    const refPosts = await getDocs(collection(db,"posts"));
    const posts = [];
    refPosts.forEach((doc)=>{
        posts.push(doc.data());
    })
    console.log(posts);
    return NextResponse.json({posts});
}

export async function POST(request) {
    const { address, title, description, rooms, bath, userImgUrl, postImgUrl, price, area } = await request.json();
    
    console.log(address,title);
    const post = { "address":address, "title":title, "description":description, "rooms":rooms, "bath":bath, "userImgUrl":userImgUrl, "postImgUrl":postImgUrl, "price":price, "area":area };
    // console.log(post);
    const docRef = await addDoc(collection(db, 'posts'), { ...post });

    console.log("Document written with ID: ", docRef.id);
    console.log(docRef.id);

    return NextResponse.json({message:"the information is posted!"})
}