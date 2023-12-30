import { Link } from "react-router-dom";
import "./index.scss";
import { Hero } from "./footer/Hero";

export const NavBar = () => {
    return (
        <div className="navbar-root-container">
            <div className="navbar-container">
                <Link to="/" className="link">Home</Link>
                <Link to="/about" className="link">About</Link>
                <Link to="/portfolio" className="link">Portfolio</Link>
                <Link to="/press" className="link">Press</Link>
                <Link to="/contact" className="link">Contact</Link>
            </div>
            {/* <Hero types={"nav"}/> */}
        </div>
    );
}