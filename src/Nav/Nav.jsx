import React from 'react'
import {Link , useLocation} from 'react-router-dom'
import astrohelmat from '../assets/astronaut-helmet.png'
import deadeye from '../assets/dead-eye.png'
import stack from '../assets/stack.png'
import envelope from '../assets/envelope.png'
import "../Styles/Nav.css"

const Nav = () => {
    const location = useLocation();
    const getlocation = ()=>{
        switch (location.pathname) {
            case "/":
                return "nav-about";
            case "/skills":
                return "nav-skills";
            case "/projects":
                return "nav-projects";
            case "/contact":
                return "nav-contact";
        
            default:
                return "";
        }
    }
    const getPageTitle = () =>{
        switch (location.pathname) {
            case "/":
                return "ABOUT";
            case "/skills":
                return "SKILLS";
            case "/projects":
                return "PROJECTS";
            case "/contact":
                return "CONTACT";
        
            default:
                return "";
        }
    }

    const navLocation = getlocation();
    const pageTitle = getPageTitle();

    const isCurrentPage = (navClass) => {
        return navClass === navLocation;
    }

    const renderNavLink = (to,imgsrc,alttext,navClass)=>{
        const isCurrent = isCurrentPage(navClass);
        const linkClass = isCurrent ? "nav-link current" : "nav-link"
        return (
            <Link to={to} className={linkClass}>
                <img src={imgsrc} alt={alttext}/>
                {isCurrent && <h1 className='page-title'>{pageTitle}</h1>}
            </Link>
        );
    };

  return (
    <nav className={`nav ${navLocation}`}>
        {renderNavLink(
            "/",
            astrohelmat,
            "astronout helmet item",
            "nav-about"
        )}
        {renderNavLink(
            "/skills",
            deadeye,
            "dead eye icon",
            "nav-skills"
        )}
        {renderNavLink(
            "/projects",
            stack,
            "stack icon",
            "nav-projects"
        )}
        {renderNavLink(
            "/contact",
            envelope,
            "enevelope icon",
            "nav-contact"
        )}
    </nav>
  )
}

export default Nav
