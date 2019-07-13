import React, { Component } from 'react';
import axios from 'axios';
import Aux from '../../../hoc/Aux';

import Image from '../../../assets/images/post-2.jpg';

class Test extends Component {
    state = {
        loadedPost: null
    }

    componentDidMount () {
        
    }

    render () {
           
        let  post = <p style={{ textAlign: 'center' }}>Loading...!</p>;   
        if ( this.state.loadedPost ) {
            post = (
                
                <div>
                    <h1>{this.state.loadedPost.title}</h1>
                    <img src={Image} alt='img'/>
                    <p>{this.state.loadedPost.body}</p>
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

export default Test;