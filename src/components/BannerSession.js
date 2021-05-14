import React, { Suspense, useEffect, useState } from 'react'
import './BannerSession.css';
import categoriesApi from '../api/categoriesApi';
import { Carousel } from 'react-bootstrap';
import axios from 'axios';


function BannerSession() {
    const [categoriesList, setCategories] = useState([]); 
    useEffect(() => {
       const fetchCategoriesList =  async () => {
           try {
                const response = await categoriesApi.getAll();
                console.log(response)
                setCategories(response);
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
                       {
                           categoriesList.map(categoriesList =>
                            <li>{categoriesList.cate_name}</li>
                            )}
                    </ul>
                </div>
                <div className="banner">
                    <div className="wrapBanner">
                        <Carousel>
                            <Carousel.Item interval={1500}>
                                <img
                                className="img-banner"
                                src="img/banner_1.jpg"
                                alt="First slide"
                                />
                                <Carousel.Caption>
                               
                                </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item interval={1500}>
                                <img
                                className="img-banner"
                                src="img/banner_2.jpg"
                                alt="Second slide"
                                />
                                <Carousel.Caption>
                              
                                </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item interval={1500}>
                                <img
                                className="img-banner"
                                src="img/banner_3.jpg"
                                alt="Third slide"
                                />
                                <Carousel.Caption>
                                </Carousel.Caption>
                            </Carousel.Item>
                        </Carousel>
                    </div>
                </div>
            </div>
        </div>
    )
}



export default BannerSession
