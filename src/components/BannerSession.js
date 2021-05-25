import React, { Suspense, useEffect, useState } from 'react'
import './BannerSession.css';
import categoriesApi from '../api/categoriesApi';
import { Carousel } from 'react-bootstrap';
import axios from 'axios';
import content from '../static/test';
import { Link } from 'react-router-dom';


function BannerSession() {
    // const [categoriesList, setCategories] = useState([]); 
    // useEffect(() => {
    //    const fetchCategoriesList =  async () => {
    //        try {
    //             const response = await categoriesApi.getAll();
    //             console.log(response)
    //             setCategories(response);
    //        } catch (error) {
    //            console.log(error)
    //        }
    //    }
    //    fetchCategoriesList();
    // }, [])
    return (
        <div className="Banner-container">
            <div className="wrap-Banner">
                <div className="categories">
                    <ul className="menu">
                       {/* {categoriesList.map(categoriesList =><li>{categoriesList.cate_name}</li>)} */
                        content.categories.map((category,key) => {
                            return (
                                <li>
                                    <Link to={`/product/${category.id}`} className="categoriesLink">
                                        {category.name}
                                    </Link>
                                </li>
                            );
                        })
                       }
                    </ul>
                </div>
                <div className="banner">
                    <div className="wrapBanner">
                        <Carousel>
                            {
                                content.banner.map((banner,key) => {
                                    return (
                                        <Carousel.Item interval={1500}>
                                            <img
                                            className="img-banner"
                                            src={banner.src}
                                            alt="First slide"
                                            />
                                            <Carousel.Caption>
                                        
                                            </Carousel.Caption>
                                        </Carousel.Item>
                       
                                    );
                                })
                            }
                            </Carousel>
                    </div>
                </div>
            </div>
        </div>
    )
}



export default BannerSession
