import React from 'react';
import './ScrollUp.css'
import arrowDown from '../../../Assets/white-down-arrow-png-2.png'
function ScrollUp() {
    let scrollUp = () => {
        window.scrollTo({top: 0, behavior: 'smooth'})
    }
    return ( <>
    
        <div onClick={() => {scrollUp()}} className='arrowContainer'>

            <img className='arrowDownImage' src={arrowDown}></img>

        </div>
    
    </> );
}

export default ScrollUp;