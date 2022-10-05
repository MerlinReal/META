import React from 'react';
import Home from '../pages/Home';
import Blog from '../pages/Blog';
import Header from './Home/Header';
import Footer from './Footer';
import '../App.css';
import { BrowserRouter as Router, Routes as Switch, Route } from 'react-router-dom';


const RouterComponent = () => {

    return (
        <div>
            <Router>
                {/* <div style={{position: "fixed" ,left: 0, top: 0, right: 0,}}> <Header /> </div> */}
                < Header />
                <div className='container'>
                    <Switch>
                        <Route path="/" element={<Home />} />
                        <Route path="/blog/:id" element={<Blog />} />
                    </Switch>
                </div>
            </Router>

            <div><Footer /></div>
        </div>
    );
};

export default RouterComponent;