import React from "react";
import './footer-style.css';

function Footer() {
    function showImpressumHandler(e)
    {
        e.preventDefault();
        alert('Impressum');
    }

    function showDatenschutzHandler(e)
    {
        e.preventDefault();
        alert('Datenshutz');
    }

    function showContactHandler(e)
    {
        e.preventDefault();
        alert('Kontakt');
    }

    return (
        <footer>
            <ul>
                <li onClick={showImpressumHandler}>Impressum</li>
                <li onClick={showDatenschutzHandler}>Datenschutz</li>
                <li onClick={showContactHandler}>Kontakt</li>
            </ul>
        </footer>
    )
}

export default Footer;