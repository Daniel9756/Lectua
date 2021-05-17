import React, { useState } from "react";

import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from "reactstrap";
const NavgBar = (props) => {
  const [collapsed, setCollapsed] = useState(true);
  const toggleNavbar = () => setCollapsed(!collapsed);

  return (
    <div className="">
      <Navbar light style={{ backgroundColor: "#2f4454", color: "#1C3334", padding: 32 }}>
     

        <NavbarBrand
          href="/"
          className="mr-auto"
          style={{
            color: "#DA7B93",
            fontFamily: "fantasy",
            letterSpacing: 5,
          }}
        >
          LECTUA
        </NavbarBrand>
        <div style={{ justifyContent: "space-between" }}>
          <NavbarToggler
            onClick={toggleNavbar}
            className="mr-2"
            style={{ background: "#DA7B93", float: "left" }}
          />
        </div>
        <Collapse isOpen={!collapsed} navbar>
          <Nav navbar style={{ color: "#1C3334" }}>
            <NavItem>
              <NavLink
                href="/"
                style={{ color: "#DA7B93", fontFamily: "serif" }}
              >
              Home
              </NavLink>
            </NavItem>

            <NavItem>
              <NavLink
                href="/"
                style={{ color: "#DA7B93", fontFamily: "serif" }}
              >
              Create Lectua
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                href="/Event"
                style={{ color: "#DA7B93", fontFamily: "serif" }}
              >
               Blog
              </NavLink>
            </NavItem> <NavItem>
              <NavLink
                href="/Event"
                style={{ color: "#DA7B93", fontFamily: "serif" }}
              >
               Pricing
              </NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
};

export default NavgBar;
