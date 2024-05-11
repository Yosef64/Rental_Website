import { message } from "antd"
import { redirect } from "next/navigation"

export default async function handlePosts(data){
    const res = await fetch("http://localhost:3000/api/posts",{
        method:"POST",
        headers: {
            "Content-Type": "application/json" // Specifies the content type of the request body
        },
        body:JSON.stringify(data)
    })

    if(res.ok){
        // message.success("You successfully post your Data!")
        return true;
    }
    else{
        return false;
    }
}