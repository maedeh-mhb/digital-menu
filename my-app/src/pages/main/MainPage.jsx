import { Outlet, useNavigate } from 'react-router-dom';
import Header from '../../components/header/Header';
import Navbar from '../../components/navbar/Navbar';
import '../../global.scss';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import './Main.scss';
import { useEffect } from 'react';

function MainPage(props) {

    function goUp() {
        const element= document.getElementById("header");
        element.scrollIntoView({ behavior: "smooth", block: "start", inline: "start"});
    };

    function showIcon() {
            let icon=document?.getElementById("up");
            if (window.scrollY >= 100) {
                icon?.classList.add('visible')
            } else {
                icon?.classList.remove('visible')
            }
          };
    
    useEffect(()=>{
        showIcon();
        window.addEventListener('scroll',showIcon)
    },[showIcon])
    
  return (
        <div className='flex flex-col relative' >
            <Navbar/>
            <Header id="header"/>     
            <Outlet/>
            <div className='sticky invisible' style={{bottom:'2rem'}} id="up">
                <div className="footer-icon pd-2 r-50 cursor " onClick={goUp}>
                         <ArrowUpwardIcon />
                </div>
            </div>
            <footer className='flex flex-center font-5 bg-main bold text-color' style={{margin:'3rem auto'}}>
                Powered By NovaDev
            </footer>
        </div>
        
    );
}

export default MainPage;