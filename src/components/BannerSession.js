import React, { Suspense, useEffect, useState } from 'react'
import './BannerSession.css';
import categoriesApi from '../api/categoriesApi';
function BannerSession() {
    const [categoriesList, setCategories] = useState([]); 
    useEffect(() => {
       const fetchCategoriesList =  async () => {
           try {
                const response = await categoriesApi.getAll();
                console.log(response);
           } catch (error) {
               console.log(error)
           }
       }
       fetchCategoriesList();
    }, [])

    return (
        <div className="Banner-container">
            <div className="wrap-Banner">
                <div className="categories">
                    <ul className="menu">
                        <li>
                            Test
                        </li>
                    </ul>
                </div>
                <div className="banner">

                </div>
            </div>
        </div>
    )
}

export default BannerSession
