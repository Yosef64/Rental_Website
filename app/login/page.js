"use client"
import React from 'react';
import Login from "@/components/login/login";
import {handleGetSession} from "@/components/login/logGoogle";
export default function Page(props) {
    async function isLogin(){
        const {user} = await handleGetSession();
        if (user!==undefined){
            window.location.href = '/dashboard'
        }
    }
    isLogin();

    return (
        <div>
            <Login></Login>
        </div>
    );
}

