import React from 'react';

import classes from'./Category.css';

const category = (props) => (
    <div className={classes.Category}>
        <ul>
            <li> 
                <a href="/">{props.name} 
                    <span>240</span>
                </a>
            </li>
        </ul>
       
    </div>
);

export default category;