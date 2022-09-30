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
         members: []
      },
      {
         name: 'San Antonio',
         link: 'https://goo.gl/maps/Y442ZJvBVvWnHmDEA',
         img: '',
         sensei: '',
         staff: [],
         members: []
      },
      {
         name: 'Mexicaltzingo',
         link: '',
         img: '',
         sensei: '',
         staff: [],
         members: []
      },
      {
         name: 'Zinacantepec',
         link: '',
         img: '',
         sensei: '',
         staff: [],
         members: []
      }
   ]
    
    return ( <>
 <div className='dojosPage' >
   {dojos?.map && dojos.map( dojo => {
      return <div className='dojoCard'>
      <div className='dojoName'>
         {'Dojo de '+ dojo.name}
      </div>
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

         </div>
         <div className='infoColumn'>
            <div>Phone</div>
            <div>Email</div>
            {/* <div></div> */}
         </div>
      </div>

      {/* <div className='dojoMembers'>
         {dojo.members}
      </div> */}


    </div>

    
   })


   }
</div>
    
        
    
    </>
      );
}

export default LocationDojos;