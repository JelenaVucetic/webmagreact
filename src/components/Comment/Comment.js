import React from 'react';

import classes from'./Comment.css';

const comment = (props) => (
    <div className={classes.Comment}>
       <h3>{props.body}</h3>
       <p>{props.author}</p>
       <p>{props.date}</p>
    </div>
);

export default comment;