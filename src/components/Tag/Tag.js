import React from 'react';

import classes from'./Tag.css';

const tag = (props) => (
    <div className={classes.Tag}>
        <ul>
            <li>
                <a hrfe='/'>{props.name}</a>
            </li>
        </ul>
    </div>
);

export default tag;