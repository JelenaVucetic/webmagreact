import React, { Component } from 'react';
import axios from '../../../axios';
import { Link } from 'react-router-dom';
import Aux from '../../../hoc/Aux';

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
            <Aux>
            <section className={classes.Comments}>
                <h2>Comments</h2>
                {comments}
            </section>

            <section className={classes.Replay}>
                <h2>Leave A Replay</h2>
                <p>your email address will not be published. required fields are marked *</p>
                <form>
                <div>
                    <label>
                        <span>Name:</span>
                        <input type="text" name="name" />
                    </label>
                    <label>
                        <span>Email:</span>
                        <input type="text" name="name" />
                    </label>
                    <label>
                        <span>Website:</span>
                        <input type="text" name="name" />
                    </label>
                </div>
    
                <textarea>
                    Message
                </textarea>
                
                <div>
                    <button>Submit</button>
                </div>
                </form>
            </section>
            </Aux>
        );
    }
}

export default Comments;