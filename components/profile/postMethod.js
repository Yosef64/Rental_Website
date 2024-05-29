export default async function handlePosts(data) {
  try {
    const res = await fetch("https://jorent.vercel.app/api/posts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json", // Specifies the content type of the request body
      },
      body: JSON.stringify(data),
    });

    if (!res.ok) {
      const errorData = await res.json();
      throw new Error(`Failed to create post: ${errorData.message || res.statusText}`);
    }

    return true; // or return await res.json() if you want to return the created post data
  } catch (error) {
    console.error("Error creating post:", error.message);
    return false;
  }
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
