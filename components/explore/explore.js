'use client'
import React,{useRef,useState} from 'react';
import {listings} from "@/components/explore/listings";
import "./explore.scss";
import {Button} from "antd";
import {ArrowLeftOutlined, ArrowRightOutlined} from "@ant-design/icons";
export default function Explore(props) {

    const scrollRef = useRef();
    const [position, setPosition] = useState(0);
    const [isScrollAtEnd, setIsScrollAtEnd] = useState(false);
    function handleScrollLeft (){
        scrollRef.current.scrollBy({
            left: 400,
            behavior: 'smooth'
        });
    }
    function handleScrollRight(){
        scrollRef.current.scrollBy({
            left: -400,
            behavior: 'smooth'
        });
    }

    function handleScroll() {
        const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
        setPosition(scrollRef.current.scrollLeft);

        if (scrollLeft + clientWidth + 50 >= scrollWidth) {
            setIsScrollAtEnd(true);
        } else {
            setIsScrollAtEnd(false);
        }
    }

    return (
        <div className="explores">
            <div className="exp-container">
                <div className="pg">
                    Explore Our Listings
                </div>
                <div className="ex-mid">
                    <Button style={{backgroundColor:position? "#6b8f68":"#fff",color:position?"#fff":"black"}} type="primary" shape="circle" onClick={handleScrollRight}><ArrowLeftOutlined /></Button>
                    <div onScroll={handleScroll} ref={scrollRef} className="ex-scroll">

                        {
                            listings.map((listing) => (
                                <div className="exp-con" key={listing.id}>
                                    <img alt="img" src={listing.img}/>
                                    <span className="city">{listing.city}</span>
                                    <span className="list">{listing.list}</span>
                                </div>
                            ))
                        }

                    </div>
                    <Button style={{backgroundColor:isScrollAtEnd? "#fff":"#6b8f68",color:isScrollAtEnd?"black":"#fff"}} type={"primary"} shape="circle"  onClick={handleScrollLeft}><ArrowRightOutlined /></Button>
                </div>

            </div>
        </div>

    );
}

