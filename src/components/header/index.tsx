import React from 'react';
import {navbars} from '../../constants/mock';
import logo from '../../assets/images/logo.png';
import { FaBars } from 'react-icons/fa';
import { GlobalContext, IState } from "../../context/provider";
import { UserAccount } from '../../@types/servers/auth.types';
import { logout } from '../../context/auth/actions';
import { RouteComponentProps, withRouter } from 'react-router-dom';
import ShopIcon from '../shopIcon';

interface IProps extends RouteComponentProps<{}>{};

function Header(props: IProps){
    const {authDispatch:dispatch ,authState, tourState} = React.useContext(GlobalContext) as IState;
    const [ isMenuToggle, setMenuToggle ]= React.useState(false);
    const [ isActionToggle, setActionToggle ]= React.useState(false);
    const [currentUser,setCurrentUser] = React.useState({} as UserAccount);
    const [path, setPath] = React.useState('');
    const [bookingCount, setBookingCout] = React.useState(0);

    React.useEffect(()=>{
        setPath(props.location.pathname)
    },[props.location])

    React.useEffect(() => {
        if(authState.user){
            setCurrentUser(authState.user)
        }
    },[authState, props.history])

    React.useEffect(()=>{
        if(tourState.tourBooking){
            console.log(tourState.tourBooking);
            setBookingCout(tourState.tourBooking.length);
        }
    },[tourState.tourBooking])

    const toggleNav =()=>{
        setMenuToggle(!isMenuToggle);
    }

    const handleToogleAction =()=>{
        setActionToggle(!isActionToggle);
    }

    const handleLogout = ()=>{
        logout()(dispatch);
        handleToogleAction();
        toggleNav();
        props.history.push('/login');
    }

    const handleMyBlog =()=>{
        handleToogleAction();
        toggleNav();
        props.history.push('/my-blog');
    }

    const handleMyTour =()=>{
        handleToogleAction();
        toggleNav();
        props.history.push('/my-tour');
    }

    const handleHistory =()=>{
        
    }

    return (
        <div className='header'>
            <div className="nav-des flex-row w-100">
                
                <img onClick={()=>props.history.push('/')} style={{width:'50px'}} src={logo} alt=''/>
                <ul className="d-flex flex-row">
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
                {path !== '/login' && <div className="header-account ml-auto mr-2 d-flex flex-row align-items-center">
                    <ShopIcon count={bookingCount} />
                    {currentUser.accountId ? (
                            <div tabIndex={-1} onBlur={()=>setActionToggle(false)} className='d-flex flex-row current-user align-items-center p-relative'> 
                                <img className='pointer' onClick={()=>handleToogleAction()} src={currentUser.avatarUrl || 'https://iupac.org/wp-content/uploads/2018/05/default-avatar.png'} alt=""/>
                                <p onClick={()=>handleToogleAction()} className="mb-0 text-white pointer">{currentUser.displayName}</p>
                                {isActionToggle && <div className="action">
                                    <p onClick={handleMyTour} className="mb-2">My Tour</p>
                                    <p onClick={handleMyBlog} className="mb-2">My Blog</p>
                                    <p onClick={handleHistory} className="mb-2">History</p>
                                    <p onClick={handleLogout} className="mb-2">Log out</p>
                                </div>}
                            </div>
                        ) : (
                            <a href='/login' className='mb-0'>Sign in</a>
                        )
                    }
                </div>}
            </div>
            <div  onBlur={toggleNav} tabIndex={-1} className='nav-mobile ml-auto p-relative'>
                <img onClick={()=>props.history.push('/')} style={{width:'50px'}} src={logo} alt=''/>
                <div  className='navb-toggle' onClick={toggleNav}> <FaBars /></div>
                {
                    isMenuToggle && (
                        <div  data-aos="fade-left" className='togglenav'>
                            {
                                navbars.map(navbar=>{
                                    return  <a key={navbar.name} className="nav-link" href={navbar.path}>{navbar.name}</a>
                                })
                            }

                            <div className="nav-mobile-control">
                                <div className="d-flex flex-row w-100">
                                    <button onClick={handleMyTour}>My Tour</button>
                                    <button  onClick={handleMyBlog} >My Blog</button>
                                </div>
                                <div className="d-flex flex-row w-100">
                                    <button  onClick={handleHistory}>History</button>
                                    <button onClick={handleLogout}>Log out</button>
                                </div>
                            </div>
                        </div>
                    )
                }
            </div>
        </div>
    )
}
export default withRouter(Header);