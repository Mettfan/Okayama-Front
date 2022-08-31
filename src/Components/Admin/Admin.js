import React from 'react';
import { useNavigate } from 'react-router-dom';
import Cookies from 'universal-cookie'
import UncompletePage from '../UncompletePage/UncompletePage';
import './Admin.css'
function Admin() {
    let cookie = new Cookies()
    let nav = useNavigate()
    let exit = () => {
        cookie.remove('user')
        // window.location.reload()
        nav('/teamOutstanding')
    }
    return ( <>
    
        {cookie.get('user') === 'admin' ?(<>
        <div className='adminContainer'>
            <div>Bienvenido Administrador</div>
            <button onClick={() => exit()}> Cerrar Sesión </button>
        </div>
        
        </>)
            :
            <UncompletePage></UncompletePage>
        }
    
    </> );
}

export default Admin;