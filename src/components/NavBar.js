import React from "react"
import { NavLink } from "react-router-dom";
import{ SocialIcon } from "react-social-icons";
import "../index.css";

export default function NavBar(){
    return(
        <header className = "bg-gray-900">
            <div className = "container mx-left flex justify-between ml-12">
                <nav className = "flex">
                    <NavLink to ='/' 
                        exact 
                        activeClassName = "text-white"
                        className = "inflex-flex items-center py-6 px-20 mr-6 text-blue-300 hover:text-blue-600 text-4xl font-bold cursive tracking-normal"
                    >
                        Abdel Rahman
                    </NavLink>
                    <NavLink to ='/Post' 
                        className = "inline-flex items-center py-3 px-0 my-6 rounded text-blue-300 hover:text-blue-600"
                        activeClassName = "text-blue-600"
                    >
                        Experience
                    </NavLink>
                    <NavLink to ='/projects'
                        className = "inline-flex items-center py-3 px-20 my-6 rounded text-blue-300 hover:text-blue-600"
                        activeClassName = "text-blue-600"
                    >
                        Projects
                    </NavLink>
                    <NavLink to ='/contact'
                        className = "inline-flex items-center py-3 px-7 my-6 rounded text-blue-300 hover:text-blue-600"
                        activeClassName = "text-blue-600"
                    >
                        Contact
                    </NavLink>
                    <NavLink to ='/about'
                        className = "inline-flex items-center py-3 px-20 my-6 rounded text-blue-300 hover:text-blue-600"
                        activeClassName = "text-blue-600"
                    >
                        About Me!
                    </NavLink>
                </nav>
                <div className = "inline-flex py-3 px-7 my-6 mr-17">
                    <SocialIcon url = "https://www.linkedin.com/in/abdel-rahman-mansour-20245b1b6/" className = "" target = "_blank" fgColor = "#fff" style = {{height: 35, width: 35}} />
                    <SocialIcon url = "https://www.instagram.com/aboudi_mansouri/" className = "ml-4 mr-4" target = "_blank" fgColor = "#fff" style = {{height: 35, width: 35}} />
                    <SocialIcon url = "https://github.com/Graycouch" className = "" target = "_blank" fgColor = "#fff" style = {{height: 35, width: 35}} />
                    <SocialIcon url = "https://wa.me/15044931415" className = "ml-4" target = "_blank" fgColor = "#fff" style = {{height: 35, width: 35}} />
                </div>
            </div>
        </header>
    )
}