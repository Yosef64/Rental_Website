import {db} from "@/fireconfig/fireBaseConfig";
import { message } from "antd";
import { addDoc, collection, getDocs } from "firebase/firestore";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request){
 const querySnapshot =  await getDocs(collection(db,"users"))
 const users = [];
 querySnapshot.forEach((doc)=>{
    users.push(doc.data());
 })
return NextResponse.json({users});
}
export async function POST(req){
    const {email,name,phone} = await req.json();
    console.log(req);
    const docRef = await addDoc(collection(db,"users"),{
        email:email,
        name:name,
        phone:phone
    });
    return NextResponse.json({message:docRef.id});

}
