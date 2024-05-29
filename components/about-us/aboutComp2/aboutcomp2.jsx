import React from 'react';
import {Flex} from "antd";
import "./aboutcomp2.css"
export default function AboutComp2(props) {
    return (
        <div className="about-comp2">
            <div className="about-comp2-left" >
                <div className="ab-cm-l-f" >
                    <img src="/about/firsthouse.jpg" alt="img"/>
                    <img src="/about/secondhouse.jpg" alt="img"/>
                </div>
                <div className="ab-cm-l-s">
                    <img src="/about/third.jpg" alt="img"/>
                </div>
            </div>
            <div className="about-comp2-right">
                <div className="ab-cp-r-t">
                    <span>Our Vision</span>
                    <p style={{width:"90%",color:"#565656",fontSize:"14px",fontWeight:500}}>
                        Whether you &apos;re a first-time homebuyer or a seasoned investor, we &apos;re here to help you navigate
                        the complex world of real estate. Explore our website to browse our current listings.
                    </p>
                </div>
                <div className="ab-cp-r-b">
                    <span>Our Mission</span>
                    <p style={{width:"90%",color:"#565656",fontSize:"14px",fontWeight:500}}>
                        Whether you &apos;re a first-time homebuyer or a seasoned investor, we &apos;re here to help you navigate
                        the complex world of real estate. Explore our website to browse our current listings.
                    </p>
                </div>
            </div>
        </div>
    );
}

