import React from 'react';
import classes from './Toolbar.css';

import { Link } from 'react-router-dom';

const toolbar = (props) => (
    <header className={classes.Toolbar}>
        <div className={[classes.Container, classes.NavSlide].join(' ')}>
           <h2><Link to="/">WEBMAG</Link></h2>
{/*             <div className={classes.Categories}>
                <div>Web Design</div>
                <div>Java Script</div>
                <div>CSS</div>
                <div>Jquery</div>
            </div> */}
            <div className={classes.NavBtns}>
                <span><Link to='new-post'>New Post</Link></span>
                <div><i className="fa fa-search"></i></div>
                <button onClick={props.clicked}><i className="fa fa-bars" aria-hidden="true"></i></button>
            </div>
        </div>
    </header>
);

export default toolbar;