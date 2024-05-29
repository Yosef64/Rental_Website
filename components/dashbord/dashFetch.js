import React from 'react'
import {handleGetSession} from "@/components/login/logGoogle";
import {deleteSession} from "@/lib";
import emailjs from '@emailjs/browser';

export async function dashFetch() {
 const res = await fetch("https://jorent.vercel.app/api/posts");
const {posts} = await res.json()

 return {posts};
}
export async function dashPut(data){
 // console.log("dash put",data);
 const {user} = await handleGetSession();
 const {email} = user;

 const res = await fetch(`https://jorent.vercel.app/api/users/${email}`,{
  method:"PUT",
  headers:{
   "Content-Type": "application/json" //
  },
  body:JSON.stringify({data})
 })



return res.ok;
}
export async function dashGet(){

        const {user} = await handleGetSession();

        const {email} = user;


        const res = await fetch(`https://jorent.vercel.app/api/users/${email}`);

        const {Find} = await res.json();
        return {Find};


}
export async function logOut(){
 await deleteSession();
 window.location.href = '/';
}
export async function onFinish(name, senderName, senderEmail, email, phone,message,imgUrl) {
    // Create a form element
    const form = document.createElement('form');
    // Append input elements to the form
    form.innerHTML = `
        <input value="${name}" name="name"/>
        <input value="${senderName}" name="sender_name"/>
        <input value="${senderEmail}" name="sender_email"/>
        <input value="${email}" name="email"/>
        <input value="${phone}" name="phone"/>
        <input value="${message}" name="message"/>
    `;

    try {
        const result = await emailjs.sendForm('service_64mr0sp', 'template_84o1fpp', form, '7ZOQ2Kl2-vcU0_4Dz');


        const res = await fetch(`https://jorent.vercel.app/api/users/${email}`);

        const {Find} = await res.json();
        // console.log(Find)
        const {messages,notifications} = Find;
        const current = {name:senderName,imgUrl:imgUrl,message:message }
        const data = {messages:[...messages,current],notifications:notifications+1};
        await dashPut(data);
        return true;
    } catch (error) {
        // console.log('FAILED...', error);
        return false;
    }
}
export async function handleRating(id,data){

    const res = await fetch(`https://jorent.vercel.app/api/posts/${id}`,{
        method:"PUT",
        headers:{
            "Content-Type": "application/json" //
        },
        body:JSON.stringify({data})
    })
    console.log(res.status);
    return res.ok;
}




