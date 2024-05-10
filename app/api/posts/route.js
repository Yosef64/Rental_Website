import { db } from "@/fireconfig/fireBaseConfig";
import { collection, doc, getDocs } from "firebase/firestore";
import { NextResponse } from "next/server";

export async function GET(request){
    const refPosts = await getDocs(collection(db,"posts"));
    const posts = [];
    refPosts.forEach((doc)=>{
        posts.push(doc.data());
    })
    return NextResponse.json(posts);
}