import React from 'react';
import { createContext,useState } from 'react';


export const Context = createContext();

export default function List({children}) {

    // TO ADD LIST
    const [lists, setList] = useState([]); 

    return (
        <>
            <Context.Provider value={{lists,setList}}>
                {children}
            </Context.Provider>
        </>
    )
}


