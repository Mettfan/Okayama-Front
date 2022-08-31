import React from 'react';
import TeamOut from '../../../Assets/TeamOut.jpg'
import './TeamOutstanding.css'
import { NavLink, useNavigate } from 'react-router-dom'

function TeamOutstanding() {
    let nav = useNavigate()
    return ( <>
            
            <img className='teamOutstanding' src={ TeamOut } onClick={()=>{nav('/teamOutstanding')}} />    

    </> );
}

export default TeamOutstanding;