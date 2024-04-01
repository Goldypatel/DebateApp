import React from "react";
import logo from '../images/image.png';

function Header(){
    return(

        <div className='header'>
            <img src={logo}/>
            <div className='logo'>Disccussphere</div>
        </div>
    
    )
}

export default Header;