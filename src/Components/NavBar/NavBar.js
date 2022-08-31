import React, { useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import OkayamaLogo from '../../Assets/OkayamaLogo.png'
import './NavBar.css'
import SlidingMenu from './SlidingMenu/SlidingMenu';
import TeamOutstanding from './TeamOutstanding.js/TeamOutstanding';
function NavBar() {
    let [state, setState] = useState({
        menuIsActive: false
    })
    let location = useLocation()
    let toggleMenu = ( ) => {
        setState({
            ...state,
            menuIsActive: !state.menuIsActive
        })
        
    }
    return ( <>

        <div className='navContainer' >
                {/* <img className='okayamaLogoInside' src={OkayamaLogo}/> */}
                <SlidingMenu menuIsActive = {state.menuIsActive}></SlidingMenu>
                <img onClick={()=>{toggleMenu()}} className='okayamaLogo' src={OkayamaLogo}/>

 

            <div className='navLinkContainer'>
                <NavLink className={'navLink'} to={'/Conocenos'}>
                    Conócenos
                </NavLink>
                <NavLink className={'navLink'} to={'/Inscripcion'}>
                    Inscripción
                </NavLink>
                <NavLink className={'navLink'} to={'/Productos'}>
                    Productos
                </NavLink>  

            </div>
                <div className='pageTitle'>
                    {(location.pathname.split('/')[1] || 'Inicio').toUpperCase()}
                </div>
                <TeamOutstanding></TeamOutstanding>


        </div>
    
    </> );
}



export default NavBar;