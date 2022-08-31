import React from 'react';
import workingProgrammers from '../../Assets/workingProgrammers.png'
import './Uncomplete.css'
function UncompletePage() {

    return ( <>
    
        <div className='wpContainer'>
            <img src={workingProgrammers}></img>
            <b>Programadores Trabajando ... </b>

        </div>
    
    </> );
}

export default UncompletePage;