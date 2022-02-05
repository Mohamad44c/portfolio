import "./Experience.scss";

export default function Experience() {
    const data = [
        {
            id: 1,
            name: "PC Garage",
            title: "Technical Support",
            img:
                "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%3Fid%3DOIP.RPACFm2wwiTJBwPximWdrgHaE8%26pid%3DApi&f=1",
            desc:
                "I worked with PC Garage for 1 year learning sales, computer hardware refurbishing and data entry.",
        },
        {
            id: 2,
            name: "Ecomz",
            title: "Merchant Success Executive",
            img:
                "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fglobal-uploads.webflow.com%2F5f6e16afd274a43996712135%2F5f76f896ade25a224b2ba082_Group%25209570.png&f=1&nofb=1",
            desc:
                "I have been working with Ecomz for the past 9 months. My main tasks include front-end design, technical support, and data entry. They have taught me the concepts of E-Commerce from A-Z",
            featured: true,
        },
        {
            id: 3,
            name: "Web Development Bootcamp",
            title: "Certificate",
            img:
                "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.0dcROikq9uu-FGqDyKdSpQHaHa%26pid%3DApi&f=1",
            desc:
                "Over the summer of 2021 I completed a full-stack web development course on Udemy.",
        },
    ];
    return (
        <div className="Experience" id="Experience">
            <h1>Experience</h1>
            <div className="container">
                {data.map((d) => (
                    <div className={d.featured ? "card featured" : "card"}>
                        <div className="top">
                            <img src="" className="left" alt="" />
                            <img
                                className="user"
                                src={d.img}
                                alt=""
                            />
                            <img className="right" src={d.icon} alt="" />
                        </div>
                        <div className="center">
                            {d.desc}
                        </div>
                        <div className="bottom">
                            <h3>{d.name}</h3>
                            <h4>{d.title}</h4>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}