import { useContext, useEffect, useState } from 'react';
import CategoriesCart from '../../components/categories/CategoriesCart';
import { CategoryContext } from '../../context/CategoryContext';

function HomePage(props) {
    const {data} = useContext(CategoryContext);
    const [categories,setCategories] = useState([]);

    useEffect(()=>{
       let category=[];
        category= data.map((item)=>item["category"]);
       setCategories([...category])
    },[]);

    return (
        <div className=" flex flex-row bg-main flex-wrap" style={{padding: '5rem 1rem'}}>
                {categories.map((cat,ind)=><CategoriesCart item={cat} key={ind}/>)}
         </div>
    );
}

export default HomePage;