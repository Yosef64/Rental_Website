import {collection,query,where,getDocs} from "firebase/firestore";
import {db} from "@/fireconfig/fireBaseConfig";
import {NextResponse} from "next/server";

export async function GET(req,{params}){
    const {id} = await params;

    try {
        const {id} = params;

        const q = query(collection(db, "posts"), where("email", "==", id));

        const querySnapshot = await getDocs(q);
        const userPost = [];
        querySnapshot.forEach((doc)=>{
            userPost.push(doc.data());
        })
        return NextResponse.json({userPost});
    }catch (error){
        return NextResponse.json({error})
    }
}