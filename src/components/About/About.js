import React from 'react';
import './About.css'
import profilePic from '../../assets/images/portfolio-picture/portfolio-pic.jpg'


const About = () => {
    return (
        <section className='background'>
            <h1 id='about'> Cory Burris </h1>
            <br />
            <div>
                <img className=' col-md-2 mb-2 ms-md-2' alt=' me with sunglassses and messy hair' src={profilePic} />

                <p>Hello, and welcome to my page!</p>
                <p> My name is Cory Burris and I am a Full Stack Developer!</p>
                <p> Some of the Technolgies I have worked with include:</p>
                <ul>
                    <li>JavaScript / Node.js</li>
                    <li>Express.js / Handlebars.js</li>
                    <li>Html / Css</li>
                    <li>SQl / MongoDb</li>
                    <li>React</li>
                </ul>
                <p> I Graduated a Boot Camp from THE Ohio State University! </p>
                <p> I look forward to continue my learning and getting a chance to work with some amazing people!</p>
                <p> This Portfolio will continue to devlop as i continue to Grow as a person and developer!</p>
                <p> Thank you for taking the time to check out my React Portfolio!</p>


            </div>
        </section>
    )
}

export default About