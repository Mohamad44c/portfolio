import React from "./Intro.scss";
import { ExpandMoreRounded } from "@material-ui/icons";
import { init } from "ityped";
import { useEffect, useRef } from "react";

export default function Intro() {

    const textRef = useRef();

    useEffect(() => {
        init(textRef.current, { 
            showCursor: true,
            backDelay: 1500,
            backSpeed: 60,
            strings: ["Web Development", "Mobile Development", "Computer Networks", "Computer Security"] });
    }, []);

    return (
        <div className="intro" id="intro">
            <div className="left">
                <div className="imgContainer">
                    <img src="assets/me.jpg" alt="me"></img>
                </div>
            </div>
            <div className="right">
                <div className="wrapper">
                    <h2>Hi there, I'm</h2>
                    <h1>Mohamad Chebli</h1>
                    <h3>A CS student learning <span ref={textRef}></span></h3>
                </div>
                <a href="#portfolio">
                    <ExpandMoreRounded className="icon" fontSize="large" />
                </a>
            </div>
        </div>
    )
}
