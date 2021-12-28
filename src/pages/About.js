import React from 'react';
import Navigation from '../components/Navigation';
import Logo from '../components/Logo';


const About = () => {
    return (
        <div>
            <Navigation />
            <Logo />
            <h1>About</h1>
            <br/>
            <p>List Coubtries from a REST API</p>
         
        </div>
    );
};

export default About;