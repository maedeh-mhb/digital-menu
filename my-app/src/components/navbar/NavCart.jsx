import './Navbar.scss';

function NavCart(props) {
    const {item,onClick}=props;
    let isActive;
    function clickHandler(e) {
      onClick(e.target.name)

    }
    return (
        <button className={`nav-cart white-space bg-secondary font-5 r-5 pd-1 bold text-center flex align-center flex-center ${isActive === item && 'active'}`} 
          name={item} 
          onClick={(item)=>clickHandler(item)}>
          {item}  
        </button>
    );
}

export default NavCart;