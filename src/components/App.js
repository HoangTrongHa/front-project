import React, { Components } from 'react';
import axios from 'axios';
import Myform from './Myform';
import CategoriesList from './CategoriesList';
import './app.css';

class App extends Components {
    state = {
        category: [],
        loader: false,
        url: "https://learninglanguage.herokuapp.com/api/category"
    }

    getCategory = () => {
        const category = axios.get(this.state.url);
        console.log(category);
        this.setState({ category: categories.data });
    }

    componentDidMount() {
        this.getCategory();
    }

    render() {
        return (
            <div>
                <h1 className="text-center">
                    Em Ha vao test
                </h1>
                <div className="container">
                    <Myform/>

                    <CategoriesList categories = {this.state.categories}/>
                </div>
            </div>
        )
    }
}

export default App;