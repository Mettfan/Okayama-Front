import React, { useState } from 'react';
import './TeamOutstandingLanding.css'
import TeamOut from '../../Assets/TeamOut.jpg'
import videoTO from '../../Assets/videoTO.mp4'
import alumnosTO from '../../Assets/alumnosTO.jpg'
import eliteTO from '../../Assets/elite.png'
import instaLogo from '../../Assets/instaLogo.png'
import fbLogo from '../../Assets/fbLogo.png'
import { useNavigate } from 'react-router-dom';
import  Cookies from 'universal-cookie'
function TeamOutstandingLanding() {
    let cookie = new Cookies()
    let [state, setState] = useState({
        user: '',
        password: ''
    })
    let nav = useNavigate()
    let loginSucces = (privilege) => {
        cookie.set('user', privilege)
        privilege === 'admin' && nav('/admin') 
        nav('/admin')
    } 
    let handleOnChange = ( e ) => {
        setState({
            ...state, 
            [e.target.name]: e.target.value
        })
    }
    let handleSubmitTO = ( e ) => {
        console.log(state);
        state.user === 'Alfonso' && state.password ==='72GC4k2qP5@v' && loginSucces('admin')
        
    }
    
    return ( <>
    
        <div className='teamOutstandingLandingContainer'>
            <div className='teamOutstandingLandingImageContainer'>
                <img className='teamOutstandingLandingImage' src={TeamOut}></img>
                <div className='inputContainerTO'>
                   { !cookie.get('user') ? (<>
                    <label className='TOinputtext' id='TOleyend'>Usuario</label>
                     <input name='user' onChange={(e)=>{handleOnChange(e)}} className='TOinput' type={'text'}></input>
                     <label onChange={(e)=>{handleOnChange(e)}} className='TOinputtext' id='TOleyend'>Contraseña</label>
                     <input name='password' onChange={(e)=>{handleOnChange(e)}} className='TOinput'  type={'password'}></input>
                     <button onClick={()=>{handleSubmitTO()}} className='buttonLoginTO'>Entrar</button>
                   
                   
                   </>
                   )
                   :
                   <div>

                         {'Logeado como: ' + cookie.get('user')}


                   </div>

                   
                   }
                </div>


            </div>
            <div className='leyendTOContainer'>
                    <div className='TOleyend' id='TOinputtext'>¿Qué es TeamOutstanding?
                        <div className='leyendDescription'>Un grupo de Artes Marciales Extremas conformado por Alumnos e Instructores.</div>
                        <div className='leyendDescription'>Reclutamos a los mejores para reforzar esas aptitudes que lo hacen tan especial dentro de nuestro grupo. </div>
                        <video width={'100%'}  loop autoPlay muted controls>
                            <source type='video/mp4' src={videoTO}></source>
                        </video>

                    </div>
                    <div className='TOleyend' id='TOinputtext'>¿Cómo puedo integrarme?
                        <div className='leyendDescription'>Las Oportunidades se presentan.</div>
                        <div className='leyendDescription'>Nuestro Equipo de Instructores Notificará al Alumno y sus Padres o Tutores cuando se observen habilidades excepcionales </div>
                        <img src={alumnosTO} style={{width: '50%'}}></img>
                    
                    </div>
                    <div className='TOleyend' id='TOinputtext'>¡Ven a Conocernos!
                        <div className='leyendDescription'>No puede perderse la Experiencia de formar parte del <b>TeamOutstanding</b>.</div>
                        <div className='leyendDescription'>Considere que existe una mayor posibilidad de ser instructor si se pertenece a un grupo Élite </div>
                        <img src={eliteTO} style={{
                        width: '50%', 
                        backgroundColor:'white',
                        padding: '20px'}}></img>
                    
                    </div>
                    <div className='TOleyend' id='TOinputtext'>Nuestro Staff le dará sus credenciales para Ingresar a TeamOutstanding 
                        <div className='leyendDescription'>Mántengase atentx a sus redes sociales si cree que es excepcional, tal vez esté más cerca de lograrlo.</div>
                        <div className='leyendDescription'>Siganos en nuestras redes para enterarse de las oportunidades de demostrar sus habilidades</div>
                        <div className='redesTO'>
                            <img className='instaLogo' onClick={() => {window.open('https://www.instagram.com/_team_outstanding_/', "_blank")}} src={instaLogo} ></img>
                            <img className='fbLogo' onClick={() => {window.open('https://www.facebook.com/OkayamaValleDeToluca/', "_blank")}} src={fbLogo} ></img>
                        </div>
                    </div>

                    
                </div>
        </div>
    
    </> );
}

export default TeamOutstandingLanding;