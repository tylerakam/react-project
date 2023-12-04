import React from "react";
import { Nav, NavLink, NavMenu } from "../Navbar";

const Navbar = () => {
    return (
        <>
            <Nav>
                <NavMenu>
                    <NavLink to="/gallery" activeStyle>
                        Gallery
                    </NavLink>
                    <NavLink to="/projects" activeStyle>
                        Projects
                    </NavLink>
                    <NavLink to="/resume" activeStyle>
                        Resume
                    </NavLink>

                </NavMenu>
            </Nav>
        </>
    );
};

export default Navbar;