import React, { useState } from 'react';
import MenuIcon from '@material-ui/icons/Menu';
import CloseIcon from '@material-ui/icons/Close';
import {Link} from "react-router-dom";
import logo from "../static/images/logo.svg";

const Navigation = () => {
    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    return (
        <div className='navigation'>
            <img src={logo} className="App-logo" alt="logo" />
            <nav className={click ? 'nav-options active' : 'nav-options'}>
                <Link  to='/' className='option' onClick={closeMobileMenu}>Home</Link>
                <Link to='/paintings' className='option' onClick={closeMobileMenu}>Paintings</Link>
                <Link to='/merchandise' className='option' onClick={closeMobileMenu}>Merchandise</Link>
                <Link to='/nfts' className='option' onClick={closeMobileMenu}>NFTs</Link>
                <Link to='/bio' className='option' onClick={closeMobileMenu}>Bio</Link>
            </nav>
            <div className='mobile-menu'  onClick={handleClick}>
                {click ? (<CloseIcon className='menu-icon' />) : (<MenuIcon className='menu-icon' />)}
            </div>
        </div>
    )
}

export default Navigation;
