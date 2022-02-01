import "./Experience.scss";

export default function Experience() {
    const data = [
        {
            id: 1,
            name: "PC Garage",
            title: "Technical Support",
            img:
                "https://images.pexels.com/photos/1680172/pexels-photo-1680172.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
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
                "I have been working with Ecomz for the past 9 months. My main tasks include front-end design, technical support, and data entry.",
            featured: true,
        },
        // {
        //     id: 3,
        //     name: "Martin Harold",
        //     title: "CEO of ALBI",
        //     img:
        //         "https://images.pexels.com/photos/3863793/pexels-photo-3863793.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
        //     desc:
        //         "Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat magnam dolorem",
        // },
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