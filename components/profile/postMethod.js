
export default async function handlePosts(data){
    const res = await fetch("http://localhost:3000/api/posts",{
        method:"POST",
        headers: {
            "Content-Type": "application/json" // Specifies the content type of the request body
        },
        body:JSON.stringify(data)
    })

    return res.ok;
}
export async function handleGetUserPosts(userEmail){
    // console.log(userEmail);
    const res = await fetch(`http://localhost:3000/api/postEmail/${userEmail}`);
    const {userPost} = await res.json();
    // console.log(userPosts);
    return {userPost};
}