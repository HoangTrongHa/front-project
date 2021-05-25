import React, { createContext,useState } from 'react'

export const DataContext = createContext();

export const DataProvider = (props) => {
    const [products,setProducts ] = useState([
        {
            "_id": "1",
            "title": "Watch product 01",
            'Thumbnail':"img/best_saler/2.jpg"
        }
    ])
    return (
        <div>
            <DataContext.Provider value={[products, setProducts]}>
                {props.children}
            </DataContext.Provider>

        </div>
    )
}