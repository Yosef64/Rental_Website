import {db} from "@/fireconfig/fireBaseConfig";
import { message } from "antd";
import {addDoc, collection, doc, getDocs,updateDoc} from "firebase/firestore";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request){
 const querySnapshot =  await getDocs(collection(db,"users"))
 const users = [];
 querySnapshot.forEach((doc)=>{
    users.push(doc.data());
 })
return NextResponse.json({users});
}
// export async function POST(req){
//     const {email,name,phone} = await req.json();
//     // console.log(req);
//     const docRef = await addDoc(collection(db,"users"),{
//         email:email,
//         name:name,
//         phone:phone
//     });
//     return NextResponse.json({message:docRef.id});
//
// }
export async function PUT(req){
    const res = await req.json();
    const {data} =  res;
    // const {email} = data;
    console.log(data);
    // const updateRef = doc(db,"users");
    // const ref = await updateDoc(updateRef,{
    //     favourites:data
    // })
    return NextResponse.json({message:"updated"});
}
