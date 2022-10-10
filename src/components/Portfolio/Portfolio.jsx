import { useState, useEffect } from "react";
import PortfolioList from "../PortfolioList/PortfolioList";
import React from "./Portfolio.scss";
import {
    featuredPortfolio,
    webPortfolio,
    programmingPortfolio,

} from "../../data";

export default function Portfolio() {
    const [selected, setSelected] = useState("web");
    const [data, setData] = useState([]);
    const list = [
        {
            id: "featured",
            title: "Featured"
        },
        {
            id: "web",
            title: "Web Apps"
        },
        {
            id: "programming",
            title: "Programming"
        },

    ];

    useEffect(() => {

        switch (selected) {
            case "featured":
                setData(featuredPortfolio);
                break;
            case "web":
                setData(webPortfolio);
                break;
            case "programming":
                setData(programmingPortfolio);
                break;

            default:
                setData(featuredPortfolio);
        }

    }, [selected]);

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
                {data.map((d) => (
                    <div className="item">
                        <img
                            src={d.img}
                            alt=""
                        />
                        <h3>{d.title}</h3>
                    </div>
                ))}
            </div>
        </div>
    );
}
