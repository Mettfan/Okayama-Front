import React from 'react';
import './RightSlideGroup.css'
import coverKarate from '../../../Assets/coverKarate.jpg'
import { useNavigate } from 'react-router-dom';
// import Carousel from '../Carousel/Carousel';

function RightSlideGroup(props) {
    let nav = useNavigate()
    return ( <>
        <div className="landingContainer">
            <div onClick={()=>{nav('/' + props.goto)}} className='bannerContainer'>
                {/* <img className='professorLegLeft' src={props.leftimage}/> */}
                <div className="leyendaCover" ><b>{props.text}</b></div>
                {/* {props.carrousel && <div><Carousel></Carousel></div>} */}
                <img className="karateCover" src={props.img}/>
                {/* <img className='professorLegRight' src={props.rightimage}/> */}
            </div>

        </div>
    
    </>  );
}

export default RightSlideGroup;