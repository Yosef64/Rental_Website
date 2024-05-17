'use client'
import React, {useEffect, useState} from 'react';
import { DashPost} from "@/components/profile/procomp";
import MessageComp, {Report} from "@/components/profile/procomp2";
import Profile from "@/components/profile/Profile";
import {handleGetSession} from "@/components/login/logGoogle";

export default function Page({params}) {
    const {id} = params;
    // console.log("from page outside userEff",userInfo)
    const listOfComps = {

        post:<DashPost />,
        message:<MessageComp  />,
        report:<Report key={null} />
    };
    const currentChild = listOfComps[id];
    return (
        <Profile current={id}>
            {currentChild}
        </Profile>
    );
}

