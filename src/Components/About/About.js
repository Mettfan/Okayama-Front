import React from 'react';
import './About.css'
import AboutCard from './AboutCard/AboutCard';
import karateSun from '../../Assets/karateSun.jpg'
import karateAge from '../../Assets/karateAge.jpg'
import videoOkayama from '../../Assets/videoOkayama.mp4'


function About() {
    let videoUrl = 'https://youtu.be/nxCSL1eFERU'
    
    return ( <>       
        <AboutCard img={karateSun} text={'Okayama es una escuela de Artes Marciales enfocado en el Karate-Do'}/>
        <video width={'100%'}  loop autoPlay muted controls>
            <source type='video/mp4' src={videoOkayama}></source>
        </video>
        <AboutCard img={karateAge} text={'Personas de todas las edades integran Okayama'}/>

{/* 
        <div className='aboutContainer'>
            <div className='aboutCard'> 
                <div className='aboutCardText'>
                    Personas de todas edades conforman integran <b>Okayama</b> 
                </div>
                <img className='aboutCardImage' src={karateSun}></img> 
            </div>
        </div> */}
        

    </> );
}

export default About;