import React from 'react';
import classes from './Footer.css';

const footer = ()  => (
    <div  className={classes.Footer}>
    <div className={classes.Container}>
        <div className={classes.Row}>
            <div className={classes.ColMd5}>
                <h2>WEBMAG</h2>
                <ul>
                    <li>Privacy Policy</li>
                    <li>Advertisement</li>
                </ul>
            </div>
            <div className={classes.ColMd4}>
                <div>
                    <h4>About us</h4>
                    <p>About us</p>
                    <p>Join Us</p>
                    <p>Contacts</p>
                </div>
            </div>
            <div className={classes.ColMd3}>
                <h4>Join Our Newsletter</h4>
                <form>
                    <input type="email" placeholder="Enter your email"/>
                    <button>Submit</button>
                </form>
            </div>
        </div>
    </div>
    </div>

);

export default footer;