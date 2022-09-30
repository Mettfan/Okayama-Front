import React from 'react';
import './Cinta.css'


function Cinta(props) {
    return ( <>

        <div className='cintaContainer'> 
            <img className='imageCintaContainer' src={props.image}></img>
            <div className='kyu'>{props.kyu + '° kyu'}</div>
        
        </div>

       
    </> );
}

export default Cinta;