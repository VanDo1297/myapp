import React from 'react';
import {navbars} from '../../constants/mock';
import logo from '../../assets/images/logo.png';
import { FaBars } from 'react-icons/fa';
import { GlobalContext, IValue } from "../../context/provider";
import { UserAccount } from '../../@types/servers/auth.types';
import { logout } from '../../context/auth/actions';
import { RouteComponentProps, withRouter } from 'react-router-dom';

interface IProps extends RouteComponentProps<{}>{};

function Header(props: IProps){
    const {authDispatch:dispatch ,authState} = React.useContext(GlobalContext) as IValue;
    const [ isMenuToggle, setMenuToggle ]= React.useState(false);
    const [ isActionToggle, setActionToggle ]= React.useState(false);
    const [currentUser,setCurrentUser] = React.useState({} as UserAccount);
    const [path, setPath] = React.useState('');

    React.useEffect(()=>{
        setPath(props.location.pathname)
    },[props.location])

    React.useEffect(() => {
        if(authState.user){
            setCurrentUser(authState.user)
        }
    },[authState, props.history])

    const toggleNav =()=>{
        setMenuToggle(!isMenuToggle);
    }

    const handleToogleAction =()=>{
        setActionToggle(!isActionToggle);
    }

    const handleLogout = ()=>{
        logout()(dispatch);
        handleToogleAction();
        props.history.push('/login')
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
                    isMenuToggle && (
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
                        <div tabIndex={-1} onBlur={handleToogleAction} className='d-flex flex-row current-user align-items-center p-relative'> 
                            <img className='pointer' onClick={handleToogleAction} src={currentUser.avatarUrl || 'https://iupac.org/wp-content/uploads/2018/05/default-avatar.png'} alt=""/>
                            <p onClick={handleToogleAction} className="mb-0 text-white pointer">{currentUser.displayName}</p>
                            {isActionToggle && <div className="action">
                                <p onClick={handleLogout} className="">Log out</p>
                            </div>}
                        </div>
                    ) : (
                        <a href='/login' className='mb-0'>Sign in</a>
                    )
                }
            </div>}
        </nav>
    )
}
export default withRouter(Header);