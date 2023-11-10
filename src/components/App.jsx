import React from "react";
import { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from  "./Note";

const date = new Date();
const year = date.getFullYear();

function App() {
    return (
        <div>        
            <Header text="Keeper"></Header>
            <Footer year={year}></Footer>
            <Note 
                title="Hello World" 
                content="saying hi"
            ></Note>
            
        </div>
    )
}

export default App;