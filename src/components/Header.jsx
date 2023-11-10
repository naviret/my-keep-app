import React from "react";
import { useState } from "react";

function Header(props) {
    return (
        <header> 
            <h1>
                {props.text}
            </h1>
        </header>
        
    );
}

export default Header;