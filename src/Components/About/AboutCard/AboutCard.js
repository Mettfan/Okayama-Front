import React from 'react';
import './AboutCard.css'

function AboutCard(props) {
    return ( <>

        <div className='aboutContainer'>
            <div className='aboutCard'>
                {props.disposition === 'left' && 
                
                    <img className='aboutCardImage' src={props.img}></img> 
                
                } 
                <div className='aboutCardText'>
                    {props.text}
                </div>
                {props.disposition === 'right' && 
                
                    <img className='aboutCardImage' src={props.img}></img> 
                
                } 
            </div>
        </div>
    
    </> );
}

export default AboutCard;