import React from 'react';
import { NavLink } from 'react-router-dom';
import './SlidingMenu.css'
function SlidingMenu(props) {
    
    return ( <>
        <div className={'menuContainer' + String(props.menuIsActive) }>
           
            <NavLink className={'navLinkMenu'} to={'/'}>Inicio</NavLink>
            {/* <NavLink className={'navLinkMenu'} to={'/login'}>Inicia Sesión</NavLink> */}
            {/* <NavLink className={'navLinkMenu'} to={'/register'}>Regístrate</NavLink> */}
            <NavLink className={'navLinkMenu'} to={'/Inscripcion'}>Inscripción</NavLink>
            <NavLink className={'navLinkMenu'} to={'/Productos'}>Productos</NavLink>
            <NavLink className={'navLinkMenu'} to={'/Conocenos'}>Conócenos</NavLink>


        </div>
    
    
    </> );
}

export default SlidingMenu;