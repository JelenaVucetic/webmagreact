import React from 'react';

import classes from'./Category.css';

const category = (props) => (
    <div className={classes.Category}  onClick={props.clicked}>
        <ul>
            <li> 
                {props.name} 
                <span>240</span>
            </li>
        </ul>
       
    </div>
);

export default category;