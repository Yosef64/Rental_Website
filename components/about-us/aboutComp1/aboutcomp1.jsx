import React from 'react';
import {Flex} from "antd";
import "./aboutcomp1.css";
export default function AboutComp1(props) {
    return (
        <div className="about-comp1">
            <Flex style={{width:"100%"}} justify="space-between" align="center">
                <div className="about-comp1-left">
                    <span style={{fontFamily: "'Nunito', sans-serif",fontWeight:900,fontSize:"27px"}}>Who Are We?</span>
                    <p  style={{fontFamily: "'Nunito', sans-serif",fontWeight:500,lineHeight:"26px"}}>
                        Whether you're a first-time homebuyer or a seasoned investor, we're here to help you navigate
                        the complex world of real estate. Explore our website to browse our current listings.
                        Whether you're a first-time homebuyer or a seasoned investor, we're here to help you navigate the
                        complex world of real estate. Explore our website to browse our current listings.
                        Whether you're a first-time homebuyer or a seasoned investor, we're here to help you navigate the
                        complex world of real estate. Explore our website to browse our current listings.
                        Whether you're a first-time homebuyer or a seasoned investor, we're here to help you navigate
                        the complex world of real estate. Explore our website to browse our current listings.

                    </p>
                </div>
                <div className="about-comp1-right">
                    <img src="/about/meeting.jpg" alt="img"/>
                </div>
            </Flex>
        </div>
    );
}

