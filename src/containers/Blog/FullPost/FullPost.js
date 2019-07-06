import React, { Component } from 'react';
import axios from 'axios';
import Aux from '../../../hoc/Aux';
import classes from './FullPost.css';
import Image from '../../../assets/images/post-2.jpg';
import Comments from '../Comments/Comments';

class FullPost extends Component {
    state = {
        loadedPost: null
    }

    componentDidMount () {
        if ( this.props.match.params.id ) {
            if ( !this.state.loadedPost || (this.state.loadedPost && this.state.loadedPost.id !== this.props.id) ) {
                axios.get( '/posts/' + this.props.match.params.id )
                    .then( response => {
                        // console.log(response);
                        this.setState( { loadedPost: response.data } );
                    } );
            }
        }
    }

    deletePostHandler = () => {
        axios.delete('/posts/' + this.props.id)
            .then(response => {
                console.log(response);
            });
    }

    render () {
        let  post = <p style={{ textAlign: 'center' }}>Loading...!</p>;   
        if ( this.state.loadedPost ) {
            post = (
                <div className={classes.FullPost}>
                    <h1>{this.state.loadedPost.title}</h1>
                    <img src={Image} alt='img'/>
                    <p>{this.state.loadedPost.body}</p>
                    <div className="Edit">
                        <button onClick={this.deletePostHandler} className="Delete">Delete</button>
                    </div>
                </div>
            );
        }
        return (
            <Aux>       
                {post}
            </Aux>
            );
    }
}

export default FullPost;