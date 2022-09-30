import React from 'react';
import './AboutCard.css'

function AboutCard(props) {
    return ( <>

        <div className='aboutContainer'>
            <div className='aboutCard'> 
                <div className='aboutCardText'>
                    {props.text}
                </div>
                <img className='aboutCardImage' src={props.img}></img> 
            </div>
        </div>
    
    </> );
}

export default AboutCard;