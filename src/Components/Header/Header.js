import React from 'react';
import './Header.css'


function Header(props) {

    return ( <div className="header">
                <p id="headerText"> Loss Express Performance Metrics </p>
                <span></span>
                <p>It is currently {props.temp} degrees in Dallas </p>
            </div> );
}

export default Header;