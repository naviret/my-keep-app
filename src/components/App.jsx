import React from "react";
import { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";

const date = new Date();
const year = date.getFullYear();

function App() {
    return (
        <div>        
            <Header text="Keeper"></Header>
            <Footer year={year}></Footer>
        </div>
    )
}

export default App;