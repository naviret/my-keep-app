import React from 'react';
import { useState } from 'react';

const date = new Date();
const year = date.getFullYear();

function Footer() {
    return (
        <footer>
            <p>Copyright {year}</p>
        </footer>
    );
}

export default Footer;
