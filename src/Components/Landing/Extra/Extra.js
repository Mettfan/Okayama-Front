import React from 'react';
import './Extra.css'

function Extra(props) {
    return ( <>

        <div className='extraContainer'>
            
            <img className='extraImage' src={props.image} />
            <div className='extraText'>
                {props.text}
            </div>

        </div>


    </> );
}

export default Extra;