import React from "react";
import { Link } from "react-router-dom";


const NavBarComponent = () => {
    return (
        <div style = {{ justifyContent: "space-evenly", display: "flex"}}>
            <Link to ="/homepage">Home</Link>
            <Link to ="/aboutpage">About</Link>

        </div>
    );
};
export default NavBarComponent;