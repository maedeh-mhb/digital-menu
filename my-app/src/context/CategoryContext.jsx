import { createContext, useReducer, useState } from "react";
import data from '../data.json';

const INITIAL_STATE = [...data];
export const CategoryContext = createContext(INITIAL_STATE);


export const CategoryContextProvider = ({children}) =>{
    const [data,setData] = useState(INITIAL_STATE);

    const value={data};

    return <CategoryContext.Provider value={value}>
        {children}
    </CategoryContext.Provider>
}
