import "./Menu.scss";

export default function Menu({ menuOpen, setMenuOpen }) {
    return (
        <div className={"menu " + (menuOpen && "active")}>
            <ul>
                <li onClick={() => setMenuOpen(false)}>
                    <a href="#intro">Home</a>
                </li>
                <li onClick={() => setMenuOpen(false)}>
                    <a href="#portfolio">Portfolio</a>
                </li>
                {/* <li onClick={() => setMenuOpen(false)}>
                    <a href="#works">Works</a>
                </li> */}
                <li onClick={() => setMenuOpen(false)}>
                    <a href="#Experience">Experience</a>
                </li>
                <li onClick={() => setMenuOpen(false)}>
                    <a href="#Certificates">Certificates</a>
                </li>
            </ul>
        </div>
    );
}