import React, { Component } from 'react';
import axios from '../../../axios';
import { Link } from 'react-router-dom';

import Category from '../../../components/Category/Category';
import classes from './Categories.css';

class Categories extends Component {
    state = {
        categories: []
    }

    componentDidMount () {
        console.log(this.props);
        axios.get( '/categories' )
            .then( response => {
                this.setState({categories: response.data})
            })
            .catch(error => {
                console.log(error);
                // this.setState({error: true});
            });
    }

    categorySelectedHandler = (id) => {
        this.setState({selectedCatId: id});
    }

    
    render () {
        const categories = this.state.categories.map(category => {
            return (
            <Link to={'/category/' + category.id}  key={category.id}>
                <Category 
                    clicked={() => this.categorySelectedHandler(category.id) } 
                    name={category.name}/>
            </Link>
            );
        })

        return (
            <section className={classes.Categories}>
                <h2>Categories</h2>
                {categories}
            </section>
        );
    }
}

export default Categories;