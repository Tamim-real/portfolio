import React from 'react';
import { Helmet } from 'react-helmet-async';
import Hero from './components/Hero/Hero';
import Expertise from './components/Expertise/Expertise';
import Projects from './components/Projects/Projects'; 
import About from './components/About/About';
import Programming from './components/Programming/Programming';
import Content from './components/Content/Content';
import Blog from './components/Blog/Blog';
import Footer from './components/Footer/Footer';

const Home = () => {
    return (
        <>
            <Helmet>
                <title>Tamim Islam | Mern Stack Developer</title>
                <meta name="description" content="Portfolio of Ramim Ahmed - Python Web Developer, Competitive Programmer, and ML Enthusiast." />
            </Helmet>
            
            <main className="min-h-screen bg-dark">
                <Hero />
                <Expertise />
                
                <Projects />
                <About />
                
                {/* <Content />  */}
                {/* <Blog /> */}
                <Footer />
            </main>
        </>
    );
};

export default Home;