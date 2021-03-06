import React from 'react';
import Truncate from 'react-truncate';
import classes from'./Post.css';

const post = (props) => (
    <div className={classes.Post} onClick={props.clicked}>
        <div> <img src={props.image} alt='img'/></div>
        <div className={classes.Info}>
            <div className={classes.Meta}>
                <span>{props.category}</span>
                <div>March 27, 2018</div>
            </div>
            <h1>{props.title}</h1>
            <div className={classes.Body}>
                <Truncate lines={4}>
                    {props.body}
                </Truncate>
            </div>
        </div>
    </div>
);

export default post;