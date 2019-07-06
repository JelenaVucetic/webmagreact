import React, { Component } from 'react';
// import axios from 'axios';
import { Route, Link } from 'react-router-dom';

import Aux from '../../hoc/Aux';
import classes from './Blog.css';
import Posts from './Posts/Posts';
import NewPost from './NewPost/NewPost';
import FullPost from './FullPost/FullPost';
import Categories from './Categories/Categories';
import Tags from './Tags/Tags';
import Toolbar from '../../components/Navigation/Toolbar/Toolbar';
import SideDrawer from '../../components/Navigation/SideDrawer/SideDrawer';
import Footer from '../../components/Footer/Footer';
import Comments from '../Blog/Comments/Comments';

class Blog extends Component {
    state = {
        showSideDrawer: false
    }
    sideDrawerOpenHandler = () => {
        this.setState({showSideDrawer:true});
    }

    sideDrawerClosedHandler = () => {
        this.setState((prevState) => {
            return {showSideDrawer: !prevState.showSideDrawer};
        } );
    }

    render () {
        return (
            <Aux>
                <header className={classes.Header}>
                     <h4>Welcome</h4>
                 </header>
            <div className={classes.Blog}>
                <Toolbar clicked={this.sideDrawerOpenHandler}/>
                <SideDrawer show={this.state.showSideDrawer} clicked={this.sideDrawerClosedHandler} />
                
                {/* <Route path="/" exact render={() => <h1>Home</h1>} />
                <Route path="/" render={() => <h1>Home 2</h1>} /> */}
                <Route path="/" exact component={Posts} />
                <Route path="/new-post" component={NewPost} />
                <Route path="/posts/:id" exact component={FullPost} />
                <div className={classes.Cat}>
                    <Categories />
                    <Tags />
                </div>        
            </div>
            <Route path="/posts/:id" exact component={Comments} />
             <Footer />
             </Aux>
        );
    }
}

export default Blog;