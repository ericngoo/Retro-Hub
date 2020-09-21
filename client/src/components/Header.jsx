import React from 'react';
import { Link } from 'react-router-dom';


function Header(props) {
    function handleHomeRequest() {
        props.handleHome();
    }

    return (
        <Link onClick={handleHomeRequest} to={{ pathname: "/" }}>
            <img className="header-img" src={process.env.PUBLIC_URL + "/assets/Background-Title.png"} alt="header-img" />
        </Link>
    )
}

export default Header;