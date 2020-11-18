import React from 'react';
import {navbars} from '../../helpers';
import logo from '../../assets/images/logo.svg'

function Navbar(){

    const [ isToggle, setToggle ]= React.useState(false)

    const toggleNav =()=>{
        setToggle(!isToggle);
    }

    return (
        <nav className="header d-flex flex-row">
            <img style={{width:'50px'}} src={logo} />
            <ul className="ml-auto nav-des">
                {
                    navbars.map(navbar=>{
                        return (
                            <li className="nav-item active">
                                <a className="nav-link" href={navbar.path}>{navbar.name}</a>
                                <div className='nav-line' />
                            </li>
                        )
                    })
                }
            </ul>
            <div onBlur={toggleNav} tabIndex={-1} className='nav-mobile ml-auto p-relative'>
                <button onClick={toggleNav}> Click !</button>
                {
                    isToggle && (
                        <div className='togglenav'>
                            <p>aa</p>
                            <p>aa</p>
                            <p>aa</p>
                            <p>aa</p>
                        </div>
                    )
                }
            </div>
        </nav>
    )
}
export default Navbar;