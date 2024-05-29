export default async function handlePosts(data) {
  const res = await ("https://jorent.vercel.app/api/posts",
  {
    method: "POST",
    headers: {
      "Content-Type": "application/json", // Specifies the content type of the request body
    },
    body: JSON.stringify(data),
  });

  return res.ok;
}
export async function handleGetUserPosts(userEmail) {
  // console.log(userEmail);
  const res = await fetch(
    `https://jorent.vercel.app/api/postEmail/${userEmail}`
  );
  const { userPost } = await res.json();
  // console.log(userPosts);
  return { userPost };
}
