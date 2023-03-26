import { useContext, useEffect, useRef, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import MainNavbar from "../../components/navbar/MainNavbar";
import { CategoryContext } from "../../context/CategoryContext";
import SubCategoryCart from "./SubCategoryCart";


function CategoryPage(props) {
    const {data}= useContext(CategoryContext);
    const params=useParams();
    const [subCategory,setSubCategory]=useState({});
    const [title,setTitle]=useState([]);
    const [isActive,setActive] = useState(false);
    

    useEffect(()=>{
        if(data) {
            const titleArr= data?.find(item=>(item["category"]?.name === params['*']))?.sub[0];
            setTitle(Object.keys(titleArr));
            setSubCategory({...titleArr})
        }
    }
    ,[params]);

    function onClick(item) {
        const element= document.getElementById(item);
        setActive(item);
        element.scrollIntoView({ behavior: "smooth", block: "start", inline: "start"});
    };

    return (
        <div className="relative" id="container">           
           <MainNavbar titles={title} onClick={onClick} isActive={isActive}/>
            {
                Object.keys(subCategory).map((item,ind)=>(
                    <>
                    <section key={ind} className={'pd-2 '} id={item}>
                        <h1 style={{marginBottom:' 8rem'}} className="font-10 text-color bold pd-1 " >{item}</h1>
                     <div className="flex flex-wrap">
                     {
                        subCategory[item].map((i)=><SubCategoryCart items={i}/>)
                    }
                     </div>  
                   
                   </section>
                    </>  
                   
                ))
            }
                    
        </div>
           
    );
}

export default CategoryPage;