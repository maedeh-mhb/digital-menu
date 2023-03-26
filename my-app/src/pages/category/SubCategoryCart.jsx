import './SubCategoryCart.scss';

function SubCategoryCart(props) {
    const {items:{url,name,ingredients,price}} = props;

    return (
        <div className='sub-cart  pd-1 '>
            <section className=' r-10 light-box-shadow over-hidden bg-secondary relative'>
                <div className=' img-container absolute pd-1 r-50 ' style={{width:"150px",height:'150px'}}>
                    <img src={url}/>
                </div>
                <div className='flex flex-col pd-2 text-color bold' style={{paddingTop:'75px'}}>
                    <div className='item font-10'>{name}</div>
                    {
                        ingredients && <div className='item flex flex-end'>{ingredients}</div>
                    }

                    <div className='item flex flex-end'>{price}</div>
                </div>
            </section>
        </div>
    );
}

export default SubCategoryCart;