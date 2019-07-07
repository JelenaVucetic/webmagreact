import React from 'react';

import classes from'./Comment.css';
import authImage from '../../assets/images/author.png'

const comment = (props) => (
    <div className={classes.Comment}>
        <div>
        <img src={authImage} alt='img' />
        </div>
        <div className={classes.Content}>
            <h4>{props.author}</h4>
            <span>{props.date}</span>
            <span>replay</span>
            <p>{props.body}</p>
            </div>
    </div>
);

export default comment;