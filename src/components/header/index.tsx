import React from 'react';
import {navbars} from '../../helpers';
import logo from '../../assets/images/logo.png';
import { FaBars } from 'react-icons/fa';

function Header(){

    const [ isToggle, setToggle ]= React.useState(false);

    const toggleNav =()=>{
        setToggle(!isToggle);
    }

    return (
        <nav className="header d-flex flex-row w-100">
            <img style={{width:'50px'}} src={logo} alt=''/>
            <ul className="nav-des">
                {
                    navbars.map(navbar=>{
                        return (
                            <li key={navbar.name} className="nav-item active">
                                <a className="nav-link" href={navbar.path}>{navbar.name}</a>
                                <div className='nav-line' />
                            </li>
                        )
                    })
                }
            </ul>
            <div onBlur={toggleNav} tabIndex={-1} className='nav-mobile ml-auto p-relative'>
                <div className='navb-toggle' onClick={toggleNav}> <FaBars /></div>
                {
                    isToggle && (
                        <div className='togglenav'>
                            {
                                 navbars.map(navbar=>{
                                     return  <a key={navbar.name} className="nav-link" href={navbar.path}>{navbar.name}</a>
                                 })
                            }
                        </div>
                    )
                }
            </div>

            <div className="account ml-auto mr-2">
                p.account
            </div>
        </nav>
    )
}
export default Header;