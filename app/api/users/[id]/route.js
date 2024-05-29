import {collection, doc, getDocs, query, updateDoc, where} from "firebase/firestore";
import {db} from "@/fireconfig/fireBaseConfig";
import {NextResponse} from "next/server";

export async function GET(req,{params}){
    const {id} = params;

    try {
        const getQuery = query(collection(db,"users"),where("email","==",id));
        const getRef = await getDocs(getQuery);

        const Find = getRef.docs[0].data();

        return NextResponse.json({Find});
    }catch (error){
        return NextResponse.json({error})
    }

}
export async function PUT(req,{params}){
    const {id} = params;
    const {data} = await req.json();
    const ref = doc(db,"users",id);
    await updateDoc(ref,data)
    console.log("success");
    return NextResponse.json({message:"success!"})
}