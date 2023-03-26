import '../../global.scss';
import './Header.scss';
import menu from '../../assets/images/menu.jpg';

function Header(props) {
    return (
        <div className='header w-100 over-hidden ' id="header">
            <img src={menu} className='w-100 h-100 object-cover '/>
        </div>
    );
}

export default Header;