"use client"
import DashComp from "@/components/dashbord/dashcomp";

import {handleGetSession} from "@/components/login/logGoogle";
 // Adjust the import if necessary

export default  function Dash() {
    async function isLogin(){
        const {user} = await handleGetSession();
        if (user === undefined){
            window.location.href = "/login";
        }
    }
    isLogin();

    return (
        <div>
            <DashComp />
        </div>
    );
}
