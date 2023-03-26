import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import SearchIcon from '@mui/icons-material/Search';
import { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import '../../global.scss';
import SearchInput from '../inputs/SearchInput';
import './Navbar.scss';
import CloseIcon from '@mui/icons-material/Close';

function Navbar(props) {

    const[activeNav,setActiveNav] = useState(false);
    const [show,setShow] = useState(false);
    const {pathname} = useLocation();
    const navigate = useNavigate();
    const changeBackground = () => {
        if (window.scrollY >= 150) {
            setActiveNav(true)
        } else {
            setActiveNav(false)
        }
      };

      useEffect(() => {
        changeBackground()
        // adding the event when scroll change background
        window.addEventListener("scroll", changeBackground)
    })
    
    return (
        <div className={`fixed w-100 pd-2 font-100 flex-between flex nav-container ${activeNav && 'bg-main'} z-50`}>
            <div className='flex align-center relative'>
                <span className="nav-icon header-icon border-50 flex flex-center align-center">
                 <SearchIcon onClick={()=>setShow(true)}/>
                </span>
                <span className={`input-container flex align-center absolute no-border h-100 bg-main  ${show && 'animate'}`}>
                  <SearchInput  />
                  <CloseIcon onClick={()=>setShow(false)} className="cursor" style={{width:'1.5rem',height:"1.5rem"}}/>
                </span>
            </div>
            <span>
                {
                    pathname !== '/' &&  <span  className='nav-icon border-50 flex flex-center align-center' onClick={()=>navigate(-1)}>
                         <ArrowBackIcon />
                    </span>
                }
           
            </span>
        </div>
    );
}

export default Navbar;