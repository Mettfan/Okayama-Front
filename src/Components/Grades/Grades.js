import React from 'react';
import Cinta from '../Landing/Cinta/Cinta';
import './Grades.css'
import primerKyu from '../../Assets/primerkyu.png'
import segundoKyu from '../../Assets/segundokyu.png'
import tercerKyu from '../../Assets/tercerkyu.png'
import cuartoKyu from '../../Assets/cuartokyu.png'
import quintoKyu from '../../Assets/quintokyu.png'
import sextoKyu from '../../Assets/sextokyu.png'
import septimoKyu from '../../Assets/septimokyu.png'
import octavoKyu from '../../Assets/octavokyu.png'
import novenoKyu from '../../Assets/cintapng.png'
import decimoKyu from '../../Assets/decimokyu.png'

function Grades() {
    return ( <>
    
        <div className='gradesContainer'>
            <div>
                <Cinta image={decimoKyu} kyu={'10'}></Cinta>
            </div>
        </div>
    
    </> );
}

export default Grades;