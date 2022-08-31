import React from "react";
import './Landing.css'
import coverKarate from '../../Assets/coverKarate.jpg'
import cintasKarate from '../../Assets/Cintas.jpg'
import personKarate from '../../Assets/karatePerson.jpg'
import RightSlideGroup from "./RightSlideGroup/RightSlideGroup";
import LeftSlideGroup from "./LeftSlideGroup/LeftSlideGroup";
import okayamaLogo from "../../Assets/OkayamaLogo.png"
import professorLeg from '../../Assets/professorLegUp.jpg'
import Carousel from "./Carousel/Carousel";



export default function Landing (){
    const settings = {
        infinite: true,
        dots: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        lazyLoad: true,
        autoplay: true,
      autoplaySpeed: 2000,
       
      }
      let images = [professorLeg, okayamaLogo, cintasKarate]
    return(<>
    <div className="slideContainer">
        <Carousel></Carousel>

    </div>
    <div className="slidesGroupContainer">
        <RightSlideGroup leftimage={professorLeg} rightimage={professorLeg} img={okayamaLogo} text={'¿Quienes Somos?'} goto={'Conocenos'}></RightSlideGroup>
        <LeftSlideGroup img={cintasKarate} text={'Conoce los Grados'}></LeftSlideGroup>
        <RightSlideGroup img={coverKarate} text={'Únete a Nuestro Equipo de Instructores'} ></RightSlideGroup>

    </div>

    </>)
}