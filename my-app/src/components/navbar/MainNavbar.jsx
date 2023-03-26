
import NavCart from './NavCart';


function MainNavbar(props) {

  const {titles,onClick,isActive} = props;
 

    return ( 
        <div style={{height:"7rem"}} className="nav relative y-hidden x-scroll sticky flex align-center" >
           <div className='flex w-100 pd-2 hide-scroll' style={{marginLeft:"17%",flex:"5"}}> 
            {
                titles.map((title,ind)=><NavCart item={title} key={ind} onClick={onClick} isActive={isActive}/>)
            }
            
            </div>
         </div>
    );
}

export default MainNavbar;