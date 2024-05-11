import React from 'react'

export async function dashFetch() {
 const res = await fetch("http://localhost:3000/api/posts");
const {posts} = await res.json()
 console.log("from dashfetch",posts);
 return {posts};
}
