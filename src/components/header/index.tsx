import React from 'react';
import {navbars} from '../../constants/mock';
import logo from '../../assets/images/logo.png';
import { FaBars } from 'react-icons/fa';
import { GlobalContext, IValue } from "../../context/provider";
import { UserAccount } from '../../@types/servers/auth.types';

function Header(){
    const {authState} = React.useContext(GlobalContext) as IValue;
    const [ isToggle, setToggle ]= React.useState(false);
    const [currentUser,setCurrentUser] = React.useState({} as UserAccount);
    const [path, setPath] = React.useState('');

    React.useEffect(()=>{
        setPath(window.location.pathname)
    },[])

    React.useEffect(() => {
        setCurrentUser(authState.user)
    },[authState])

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

            {path !== '/login' && <div className="header-account ml-auto mr-2 d-flex flex-column align-items-center">
                {currentUser.accountId ? (
                        <div className='d-flex flex-row current-user align-items-center'> 
                            <img src={currentUser.avatarUrl || 'https://iupac.org/wp-content/uploads/2018/05/default-avatar.png'} alt=""/>
                            <p className="mb-0 text-white">{currentUser.displayName}</p>
                        </div>
                    ) : (
                        <a href='/login' className='mb-0'>Sign in</a>
                    )
                }
            </div>}
        </nav>
    )
}
export default Header;