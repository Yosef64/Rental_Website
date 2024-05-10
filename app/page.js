import React from 'react';
import Navbar from "@/components/napbar/Navbar";
import Center1 from "@/components/center1/Center1";
import Center2 from "@/components/center2/center2";
import Explore from "@/components/explore/explore";
import Footer from "@/components/footer/Footer"
export default function Page(props) {
    
    return (
        <div className='app'>
            <Navbar></Navbar>
            <Center1></Center1>
            <Explore></Explore>
            <Center2></Center2>
            <Footer></Footer>
        </div>
    );
}

