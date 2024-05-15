'use client'
import React from 'react';
import Profile from "@/components/profile/Profile";
import Contents from "@/components/dashbord/content";
import {DashContents} from "@/components/profile/procomp";

export default function Page(props) {
    return (
        <div>
            <Profile current="profile">
                <DashContents />
            </Profile>
        </div>
    );
}

