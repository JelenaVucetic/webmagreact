import React, { Component } from 'react';
import axios from '../../../axios';
import { Link } from 'react-router-dom';

import Tag from '../../../components/Tag/Tag';
import classes from './Tags.css';

class Tags extends Component {
    state = {
        tags: []
    }

    componentDidMount () {
        console.log(this.props);
        axios.get( '/tags' )
            .then( response => {
                this.setState({tags: response.data})
            })
            .catch(error => {
                console.log(error);
                // this.setState({error: true});
            });
    }
    
    render () {
        const tags = this.state.tags.map(tag => {
            return <Tag 
                        key={tag.id}
                        name={tag.name}/>;
        })

        return (
            <section className={classes.Tags}>
                {tags}
            </section>
        );
    }
}

export default Tags;