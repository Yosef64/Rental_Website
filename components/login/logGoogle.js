import { getSession, login } from '@/lib';
import { redirect } from 'next/navigation';
import { addDoc, collection } from 'firebase/firestore';
import { db } from '@/fireconfig/fireBaseConfig';
import {  getAuth, signInWithPopup,GoogleAuthProvider,signInWithEmailAndPassword } from "firebase/auth";
import { auth,provider } from '@/fireconfig/fireBaseConfig';

export async function handleSign(){

    signInWithPopup(auth, provider)
    .then( async (result)  => {
        
        const credential = GoogleAuthProvider.credentialFromResult(result);
        
        const user = result.user;
        const [name,email,imgUrl] = [user.displayName,user.email,user.photoURL]
        const ref = await addDoc(collection(db,"users"),{
            name:name,
            email:email,
            imgUrl:imgUrl
        })

        await login({name,email,imgUrl});
       redirect('/dashboard');
        
    }).catch((error) => {

    const errorCode = error.code;
    const errorMessage = error.message;
});

}
export async function handleSession(){
    const session = await getSession();
    if(session){
        if(new Date(session.expires) > new Date(Date.now()) ){
            console.log(JSON.stringify(session,null,2));
            return true;
        }
    }
    return false;
}
export async function handleGetSession(){
    const session =  await getSession();
    const sessionString = JSON.stringify(session,null,2);
    const sessionObject = JSON.parse(sessionString,null,2);
    const {user} = sessionObject;
   
    return {user};
    
}