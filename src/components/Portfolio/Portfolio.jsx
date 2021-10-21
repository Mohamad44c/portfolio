import PortfolioList from "../PortfolioList/PortfolioList";
import React from "./Portfolio.scss";
import { useState } from "react";

export default function Portfolio() {

    const [selected, setSelected] = useState("featured");
    const list = [
        {
            id: "featured",
            title: "Featured"
        },
        {
            id: "web",
            title: "Web App"
        },
        {
            id: "mobile",
            title: "Mobile App"
        },
        {
            id: "design",
            title: "Design"
        },
    ];
    return (


        <div className="portfolio" id="portfolio">
            <h1>Portfolio</h1>
            <ul>

                {list.map(item => (
                    <PortfolioList
                        title={item.title}
                        active={selected === item.id}
                        setSelected={setSelected}
                        id={item.id} />
                ))}

            </ul>
            <div className="container">
                <div className="item">
                    <img src="https://www.doublemesh.com/wp-content/uploads/2014/05/free-golden-web-template.jpg" alt=""></img>
                    <h3>Banking App</h3>
                </div>


                <div className="item">
                    <img src="https://www.doublemesh.com/wp-content/uploads/2014/05/free-golden-web-template.jpg" alt=""></img>
                    <h3>Banking App</h3>
                </div>

                <div className="item">
                    <img src="https://www.doublemesh.com/wp-content/uploads/2014/05/free-golden-web-template.jpg" alt=""></img>
                    <h3>Banking App</h3>
                </div>
                <div className="item">
                    <img src="https://www.doublemesh.com/wp-content/uploads/2014/05/free-golden-web-template.jpg" alt=""></img>
                    <h3>Banking App</h3>
                </div>
                <div className="item">
                    <img src="https://www.doublemesh.com/wp-content/uploads/2014/05/free-golden-web-template.jpg" alt=""></img>
                    <h3>Banking App</h3>
                </div>
                <div className="item">
                    <img src="https://www.doublemesh.com/wp-content/uploads/2014/05/free-golden-web-template.jpg" alt=""></img>
                    <h3>Banking App</h3>
                </div>

            </div>


        </div>
    );
}
