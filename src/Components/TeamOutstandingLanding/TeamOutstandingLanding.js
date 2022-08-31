import React from 'react';
import './TeamOutstandingLanding.css'
import TeamOut from '../../Assets/TeamOut.jpg'
function TeamOutstandingLanding() {
    return ( <>
    
        <div className='teamOutstandingLandingContainer'>
            <div className='teamOutstandingLandingImageContainer'>
                <img className='teamOutstandingLandingImage' src={TeamOut}></img>
                <div className='inputContainerTO'>
                    <label className='TOinputtext' id='TOleyend'>Usuario</label>
                    <input className='TOinput' type={'text'}></input>
                    <label className='TOinputtext' id='TOleyend'>Contraseña</label>
                    <input className='TOinput'  type={'password'}></input>

                </div>


            </div>
            <div className='leyendTOContainer'>
                    <div className='TOleyend' id='TOinputtext'>¿Qué es TeamOutstanding?
                        <div className='leyendDescription'>Un grupo conformado por Alumnos e Instructores.</div>
                        <div className='leyendDescription'>Reclutamos a los mejores para reforzar esas aptitudes que lo hacen tan especial dentro de nuestro grupo. </div>
                    
                    </div>
                    <div className='TOleyend' id='TOinputtext'>¿Cómo puedo integrarme?
                        <div className='leyendDescription'>Las Oportunidades se presentan.</div>
                        <div className='leyendDescription'>Nuestro Equipo de Instructores Notificará al Alumno y sus Padres o Tutores cuando se observen habilidades excepcionales </div>
                    
                    </div>
                    <div className='TOleyend' id='TOinputtext'>¡Ven a Conocernos!
                        <div className='leyendDescription'>No puede perderse la Experiencia de formar parte del <b>TeamOutstanding</b>.</div>
                        <div className='leyendDescription'>Considere que existe una mayor posibilidad de ser instructor si se pertenece a un grupo Élite </div>
                    
                    </div>
                    <div className='TOleyend' id='TOinputtext'>Nuestro Staff le dará sus credenciales para Ingresar a TeamOutstanding 
                        <div className='leyendDescription'>Mántengase atentx a sus redes sociales si cree que es excepcional, tal vez esté más cerca de lograrlo.</div>
                        <div className='leyendDescription'>Siganos en nuestras redes para enterarse de las oportunidades de demostrar sus habilidades</div>
                    
                    </div>

                    
                </div>
        </div>
    
    </> );
}

export default TeamOutstandingLanding;