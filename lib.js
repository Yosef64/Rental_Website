"use server"
import { SignJWT, jwtVerify } from "jose";
import { cookies } from "next/headers";
import { NextResponse } from "next/server";

const secretKey = "secret";
const encodedKey = new TextEncoder().encode(secretKey);

export async function encrypt(payload) {
  return await new SignJWT(payload)
    .setProtectedHeader({ alg: "HS256" })
    .setIssuedAt()
    .setExpirationTime("7d")
    .sign(encodedKey);
}

export async function decrypt(session) {
  try {
    const { payload } = await jwtVerify(session, encodedKey, {
      algorithms: ["HS256"],
    });
    return payload;
  } catch (error) {
    console.log("Failed to verify session");
    return null; // Ensure a consistent return value
  }
}



export async function login(data) {
  const {email,name,imgUrl} = data;
  const user = { email: email, name: name,imgUrl:imgUrl};
  const expires = new Date(Date.now() +  7 * 24 * 60 * 60 * 1000);
  const session = await encrypt({ user, expires });
  // console.log(session);
  cookies().set("session", session, { expires, httpOnly: true });
}

export async function getSession() {
  const session = cookies().get("session")?.value;
  if (!session) return null;

  return await decrypt(session);
}

export async function updateSession(request) {
  const session = request.cookies.get("session")?.value;
  if (!session) return null;

  const parsed = await decrypt(session);
  parsed.expires = new Date(Date.now()+  7 * 24 * 60 * 60 * 1000);
  const res = NextResponse.next();
  res.cookies.set({
    name:"session",
    value:await encrypt(parsed),
    httpOnly:true,
    expires:parsed.expires
  });
  return res;

  
}
