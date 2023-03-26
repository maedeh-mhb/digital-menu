import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import './CategoriesCart.scss';


function CategoriesCart(props) {

const {name,imgUrl} = props.item;
const navigate=useNavigate();

    return (
        <div className='cart-container  relative pd-1 flex flex-col align-center r-10' onClick={()=>navigate(`/categories/${name}`)}>
                <section className=' r-10 box-shadow'>
                  <img src={imgUrl} className="w-100 h-100" />
                </section>
             <span className='flex flex-center absolute font-5 r-5 bg-secondary t-0 pd-1 w-50 box-shadow'>{name}</span>
        </div>
    );
}

export default CategoriesCart;