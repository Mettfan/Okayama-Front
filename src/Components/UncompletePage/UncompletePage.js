import React, { useEffect, useState } from 'react';
import workingProgrammers from '../../Assets/workingProgrammers.png'
import './Uncomplete.css'
function UncompletePage() {


    return ( <>
    
        <div className='wpContainer'>
            <b>{ window.location.pathname +' Estará listo pronto'}</b>
            <img src={workingProgrammers}></img>
            <b>Programadores Trabajando ... </b>

        </div>
    
    </> );
}

export default UncompletePage;