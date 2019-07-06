import React, { Component } from 'react';
import axios from '../../../axios';
import { Link } from 'react-router-dom';

import Comment from '../../../components/Comment/Comment';
import classes from './Comments.css';

class Comments extends Component {
    state = {
        comments: []
    }

    componentDidMount () {
        console.log(this.props);
        axios.get( '/comments' )
            .then( response => {
                this.setState({comments: response.data})
            })
            .catch(error => {
                console.log(error);
                // this.setState({error: true});
            });
    }
    
    render () {
        const comments = this.state.comments.map(comment => {
            return <Comment 
                        key={comment.id}
                        body={comment.body}
                        author={comment.author}
                        date={comment.date}/>;
        })

        return (
            <section className={classes.Comments}>
                <h2>Comments</h2>
                {comments}
            </section>
        );
    }
}

export default Comments;