import React from 'react';
import Navbar from "@/components/napbar/Navbar";
import "./about.css";
import AboutComp1 from "@/components/about-us/aboutComp1/aboutcomp1";
import AboutComp2 from "@/components/about-us/aboutComp2/aboutcomp2";
import Creed from "@/components/about-us/creed/creed";
import Teams from "@/components/about-us/teams/teams";
import Footer from "@/components/footer/Footer";
export default function AboutUs(props) {
    return (
        <div className="about-us">
            <div className="about-container">
                <Navbar/>
                <div className="about-con-cen1">
                    <img src="/about/aboutBg1.jpg" alt="something"/>
                    <div className="about-con-cen1-p">
                        <span style={{fontSize:"30px",fontFamily:"'Montserrat',sans-serif",fontWeight:700,color:"#d7dce3"}}>About Us</span>
                        <p style={{fontSize:"12px"}}>
                            Whether you&apos;re a first-time homebuyer or a seasoned investor, we&apos;re here to help you navigate
                            the complex world of real estate. Explore our website to browse our current listings.
                        </p>
                    </div>
                </div>
                <AboutComp1 />
                <AboutComp2 />
                <Creed />
                <Teams />
                <Footer />
            </div>


        </div>
    );
}

