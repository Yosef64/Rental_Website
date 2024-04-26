import React from 'react';
import Image from "next/image";
import "./c1.scss";
export default function Center1(props) {
    return (
        <div className="cen1">
            <div className="c1-container">
                <div className="c1-left">
                    <div className="f-pg">
                        Find Your <span>Perfect Home </span>
                        <br/>
                        With Us
                    </div>
                    <div className="s-pg">
                        <div className="s-pg-item">
                            All type
                            <span className="material-symbols-outlined">expand_more</span>

                        </div>
                        <div className="s-pg-item">
                            Neighborhood
                            <span className="material-symbols-outlined">expand_more</span>
                        </div>
                        <div className="s-pg-item no">
                            <span className="material-symbols-outlined">search</span>
                        </div>
                    </div>
                </div>
                <div className="c1-right">
                    <img src="/try-hd.png" alt="something is wrong!"/>
                </div>
            </div>
        </div>
    );
}

