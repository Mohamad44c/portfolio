import "./Experience.scss";

export default function Experience() {
  const data = [
    {
      id: 1,
      name: "PC Garage",
      postiion: "Technical Support",
      img: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%3Fid%3DOIP.RPACFm2wwiTJBwPximWdrgHaE8%26pid%3DApi&f=1",
      desc: "I worked with PC Garage for 1 year learning sales, computer hardware refurbishing, and stock management.",
    },
    {
      id: 2,
      name: "Ecomz",
      postiion: "Merchant Success Executive",
      img: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fglobal-uploads.webflow.com%2F5f6e16afd274a43996712135%2F5f76f896ade25a224b2ba082_Group%25209570.png&f=1&nofb=1",
      desc: "I started at Ecomz in July 2021. My main tasks included UX/UI, technical support, and data entry. I learned the concepts of E-Commerce from A-Z",
      featured: true,
    },
    {
      id: 3,
      name: "Web Development Bootcamp",
      postiion: "Certificate",
      img: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.0dcROikq9uu-FGqDyKdSpQHaHa%26pid%3DApi&f=1",
      desc: "Over the summer of 2021 I completed a full-stack web development course on Udemy.",
    },
  ];
  return (
    <div className="Experience" id="Experience">
      <h1>Experience</h1>
      <div className="container">
        {data.map((d) => (
          <div className={d.featured ? "card featured" : "card"}>
            <div className="top">
              <img src={d.img} className="card-img-top user" alt=""></img>
            </div>
            <div className="card-body">
              <h3 className="card-title">{d.name}</h3>
              <h5 className="card-title">{d.postiion}</h5>
              <p className="card-text">{d.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
