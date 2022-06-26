import React from 'react';
import './About.css'
import profilePic from '../../assets/images/portfolio-picture/portfolio-pic.jpg'


const About = () => {
    return (
        <section className='my-5 flex-grow-2 background'>
            <h1 id='about'> Cory Burris </h1>
            <br />
            <img className='my-5 img-thumbnail' src={profilePic} />

        </section>
    )
}

export default About