import React from 'react';
import './LocationDojos.css'
function LocationDojos() {
   let dojos = [
      {
         name: 'San Andres',
         link: 'https://goo.gl/maps/EojSJgJFwhepPsDc7',
         img: 'https://lh5.googleusercontent.com/p/AF1QipMa8uGsSp1YGWgu433Uav8ZIPMxkQNQ_uBwDYg4=w408-h725-k-no',
         sensei: '',
         staff: [],
         members: [],
         schedule: {
            'Lunes': '4:50 - 7:50',
            'Martes': '4:50 - 7:50',
            'Miércoles': '4:50 - 7:50',
            'Jueves': '4:50 - 7:50',
            'Viernes': '4:50 - 6:50',
            'Sábado': '4:50 - 7:50',
         }
      },
      {
         name: 'San Antonio',
         link: 'https://goo.gl/maps/Y442ZJvBVvWnHmDEA',
         img: '',
         sensei: '',
         staff: [],
         members: [],
         schedule: {
            'Lunes': '4:30 - 7:20',
            'Martes': '5:30 - 7:20',
            'Miércoles': '4:30 - 7:20',
            'Jueves': 'Cerrado',
            'Viernes': '4:00 - 7:35',
            'Sábado': '3:50 - 7:20',
         }
      },
      {
         name: 'Mexicaltzingo',
         link: '',
         img: '',
         sensei: '',
         staff: [],
         members: [],
         schedule: {
            'Lunes': '-',
            'Martes': '-',
            'Miércoles': '-',
            'Jueves': '-',
            'Viernes': '-',
            'Sábado': '-',
         }
      },
      {
         name: 'Zinacantepec',
         link: '',
         img: '',
         sensei: '',
         staff: [],
         members: [],
         schedule: {
            'Lunes': '-',
            'Martes': '-',
            'Miércoles': '-',
            'Jueves': '-',
            'Viernes': '-',
            'Sábado': '-',
         }
         
      }
   ]
    
    return ( <>
   <h1 className='pageLocationTitle'>
      ¡Encuentra tu Dojo más cercano y visítanos!
   </h1>
 <div className='dojosPage' >
   {dojos?.map && dojos.map( dojo => {
      return <div className='dojoCard'>
      <h2 className='dojoName'>
         {'Dojo de '+ dojo.name}
      </h2>
      {/* <div >
         <img className='dojoImg' src={dojo.img}></img> 
      </div> */}
      <div className='infoDojos'>

         <div className='dojoLink'>
            <img
            className='mapsLogo'
            src='https://seeklogo.com/images/G/google-maps-2014-logo-6108508C7B-seeklogo.com.png' 
            onClick={() => {window.open(dojo.link, "_blank")}}
            ></img>
            <h3>
               Horarios
            </h3>
            <div className='scheduleContainer'>
               {Object?.entries(dojo?.schedule).map( day => {
                  return (<div className='dayScheduleContainer'>
                     <div className='dayNameContainer'>
                        {day[0] + ' '}
                     </div>
                     <div className='hourValueContainer'>
                        {day[1]}
                     </div>

                  </div>)
               } )}
            </div>
            

         </div>

      </div>




    </div>

    
   })


   }
</div>
<h3 className='infoBottom'>
   Realiza tu inscripción ahora mismo llamándonos al: 722 222 2222
</h3>
<h3 className='infoBottom'>
   O mándanos un correo a: okayamakaratedo@okayama.com
</h3>
<h3 className='phraseBottom'>
   'Nunca es tarde para aprender algo nuevo'
</h3>
    
        
    
    </>
      );
}

export default LocationDojos;