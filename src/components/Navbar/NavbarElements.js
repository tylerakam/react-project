import React from "react";
import { Nav, NavLink, NavMenu } from "../Navbar";

const Navbar = () => {
    return (
        <>
            <Nav>
                <NavMenu>
                    <NavLink to="/react-project" active activeStyle>
                        Home
                    </NavLink>
                    <NavLink to="/gallery" activeStyle>
                        Gallery
                    </NavLink>
                    <NavLink to="/projects" activeStyle>
                        Projects
                    </NavLink>
                    <NavLink to="/resume" activeStyle>
                        Resume
                    </NavLink>
                    <NavLink to="/about" activeStyle>
                        About
                    </NavLink>

                </NavMenu>
            </Nav>
        </>
    );
};

export default Navbar;