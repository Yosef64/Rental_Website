import {increment,getDoc, deleteDoc, doc, updateDoc} from "firebase/firestore";
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
export async function PUT(req,{params}){
    const {id} = params;
    const {data} = await req.json();
    let incVal;
    const {rating,ratedUser,user} = data;
    console.log(user,ratedUser);
    const index = ratedUser.findIndex((item)=>item.user === user)
    console.log(index);
    if (index !== -1){
        incVal = rating - ratedUser[index]['rating'];
        ratedUser[index]['rating'] = rating;
        console.log("from this",incVal)
    }
    else {
        incVal = rating
        ratedUser.push({user,rating})
    }
    console.log(incVal);
    const ref = doc(db,"posts",id);
    await updateDoc(ref,{
        ratedUser:ratedUser,
        totalRating:ratedUser.length > 1 ? increment(incVal) : rating

    })
    console.log("success");
    return NextResponse.json({message:"success!"})
}