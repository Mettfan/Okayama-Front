import React from 'react';
import './Plan.css'

function Plan(props) {
    return ( <>
    
        <div className='planContainer'>
            <div className='planTitle'>
                {props.title}
            </div>
            <div className='planImage'>
                <img className='coverImgL2' src={props.image}/>
            </div>
            <div className='planDescription'>
                {props.description}
            </div>

            <div className='planDivider'></div>

            <div className='planInfo'>
                {props.info}
            </div>
            <button className='planButton'>¡Inscríbase con Nosotros!</button>
        </div>

      
    
    </> );
}

export default Plan;