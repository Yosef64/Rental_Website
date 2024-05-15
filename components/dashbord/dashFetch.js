import React from 'react'
import {handleGetSession} from "@/components/login/logGoogle";

export async function dashFetch() {
 const res = await fetch("http://localhost:3000/api/posts");
const {posts} = await res.json()
 // console.log("from dashfetch",posts);
 return {posts};
}
export async function dashPut(data){
 // console.log("dash put",data);
 const {user} = await handleGetSession();
 const {email} = user;

 const res = await fetch(`http://localhost:3000/api/users/${email}`,{
  method:"PUT",
  headers:{
   "Content-Type": "application/json" //
  },
  body:JSON.stringify({data})
 })
 // console.log("from dashPut",data);
 const {message}  =  res;
 // console.log("the put method says",message,newData);
return res.ok;
}
export async function dashGet(){
 const {user} = await handleGetSession();

 const {email} = user;


 const res = await fetch(`http://localhost:3000/api/users/${email}`);

 const {Find} = await res.json();

 return {Find};
}

