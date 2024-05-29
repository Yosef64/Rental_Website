import { getSession, login } from '@/lib';
import { redirect } from 'next/navigation';
import {addDoc, collection, doc, updateDoc,setDoc} from 'firebase/firestore';
import { db } from '@/fireconfig/fireBaseConfig';
import {  getAuth, signInWithPopup,GoogleAuthProvider,signInWithEmailAndPassword } from "firebase/auth";
import { auth,provider } from '@/fireconfig/fireBaseConfig';
import {dashPut} from "@/components/dashbord/dashFetch";
import {message} from "antd";

export async function handleSign(){

        signInWithPopup(auth, provider)
            .then(async (result) => {

                const credential = GoogleAuthProvider.credentialFromResult(result);
                message.loading("redirecting",0)
                const user = result.user;
                const [name, email, imgUrl] = [user.displayName, user.email, user.photoURL]

                const search = await fetch("http://localhost:3000/api/users");

                const {users} = await search.json();

                const newList = users.filter((item)=>item.email === email);
                if(newList.length === 0){
                    const ref = await setDoc(doc(db, "users",email), {
                        name: name,
                        email: email,
                        imgUrl: imgUrl,
                        favourites:[],
                        messages:[]
                    })
                }
                await login({name, email, imgUrl});
                message.destroy();
                window.location.href = '/dashboard';

            }).catch((error) => {

            const errorCode = error.code;
            const errorMessage = error.message;
            // message.error(errorMessage);
            message.destroy();
        });

}
export async function handleSession(){
    const session = await getSession();
    if(session){
        if(new Date(session.expires) > new Date(Date.now()) ){
            return true;
        }
    }
    return false;
}
export async function handleGetSession(){
    try {
        const session =  await getSession();
        const sessionString = JSON.stringify(session,null,2);
        const sessionObject = JSON.parse(sessionString,null,2);
        const {user} = sessionObject;


        return {user}
    }catch (e) {
        return {user:undefined}
    }

    
}