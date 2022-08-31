import React from 'react';
import { useNavigate } from 'react-router-dom';
import './LeftSlideGroup.css'
// import professorLegUpLeft from "../../Assets/professorLegUp.jpg"

function LeftSlideGroup(props) {
    let nav = useNavigate()
    return ( <>
        <div  className="landingContainer">
        {/* <img src={professorLegUp} className={professorLegUpLeft}></img> */}

            <div onClick={()=>{nav('/' + props.goto)}} className='bannerContainer'>
                <img className="karateCover" src={props.img}/>
                <div className="leyendaCover" ><b>{props.text}</b></div>

            </div>
        {/* <img src={professorLegUp} className={professorLegUpLeft}></img> */}
        </div>
    
    </>  );
}

export default LeftSlideGroup;