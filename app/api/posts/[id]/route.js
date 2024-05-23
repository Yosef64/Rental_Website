import {collection, query, where, getDoc, deleteDoc, doc} from "firebase/firestore";
import {db} from "@/fireconfig/fireBaseConfig";
import {NextResponse} from "next/server";

export async function GET(req,{params}){
    const {id} = await params;

    try {
        const docRef = doc(db,"posts",id);

        const querySnapshot = await getDoc(docRef);
        const post = querySnapshot.exists() ? querySnapshot.data() : [];

        return NextResponse.json({post});
    }catch (error){
        return NextResponse.json({error})
    }
}
export async function DELETE(req, { params }) {
    const { id } = params; // Directly destructuring params
    try {
        await deleteDoc(doc(db, "posts", id));
        return NextResponse.json({message:"Document deleted successfully"}, { status: 200 });
    } catch (error) {
        return NextResponse.json({message:`Error deleting document: ${error.message}`
    }, { status: 500 });
    }
}