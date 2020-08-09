
import header from  './header.png'
import React  from 'react'
import './LandingPage.css'
import service from './services.png'
import logo from '../../navbar/uiContent/logo.png'
import man from './man.png'
import foot_screen from './foot_screen.png'
import google from './google.png'
import facebook from './facebook.png'
import Twitter from './Twitter.png'
import linkedin from './linkedin.png'

const LandingPage =({

})=> {
   
        return(
<div>   
     <div className='landingPage__topSection'>
                <img  className='landing--header' src={header} alt='Smiley face'/>
                <div className='landingPage__topSection--text'>
                <p >
                    El Club de Empresarial de Panamá, es un espacio creado para los dueños y altos ejecutivos de Empresas privadas. Un Club para reunir, intercambiar, conocer e incluso asesorar a empresarios, que con su creatividad, dedicación y esmero hacen de Panamá un gran país. Personas que viven actualizadas y que marcan liderazgo en los negocios nacionales e internacionales. Un foro comercial de conciencia social y ecológica que además de buenos negocios desean hacer un mejor planeta
                    </p>

                </div>
            
            </div>
            <div className='landingPage__serviceSection'>
            <p className='landingPage__subtitle'>SERVICIOS</p>
            <img  className='landing--service' src={service} alt='Smiley face'/>
            </div>
            <div className='landingPage__clubSection'>
            <p className='landingPage__subtitle'>CLUB</p>
                <div className='landing__club__text--container' >
                   
               
                <div
                className='landing__club__text--subContainer'  >
                <img  className='logo' src={logo} alt='Smiley face'/>
                <p className='landing__club__text' >Las Empresas Fundadoras del CEP ofrecen sus servicios y asesoría, a todos los nuevos miembros del club. Especialmente a las empresas medianas y pequeñas, que buscan lograr incrementar sus ventas, disminuir sus costos y mejorar sus operaciones; todo esto a precios accesibles, pero sobre todo de la mano de empresas con mucha experiencia en las diferentes áreas.</p> 
                <br/>
                <p>En este club se llevan a cabo cursos y seminarios a fin de mantener actualizados a los integrantes. Así mismo, una vez al mes celebramos las noches de convivencia empresarial con el fin presentar a los nuevos miembros.   Pero también para fomentar las relaciones que ayuden en el intercambio de información de las actividades de las empresas. También daremos espacio a los emprendedores que busquen inversionistas o alianzas comerciales.</p>
                </div>
                <img  className='landing--club--image' src={man} alt='Smiley face'/>
                </div>
            </div>
            <div className='landingPage__bottomSection'>
            <img  className='landing--service' src={foot_screen} alt='Smiley face'/>
            </div>
            <div className='landingPage__footer'>
                <div className='landing__club__footer--socialMedia'>
                <img  className='landing--footer--img' src={Twitter} alt='Smiley face'/>
                <img  className='landing--footer--img' src={google} alt='Smiley face'/>
                <img  className='landing--footer--img' src={linkedin} alt='Smiley face'/>
                <img  className='landing--footer--img' src={facebook} alt='Smiley face'/>

                </div>
                <div  >
                    <p className='landingPage__footer--text'>Club Empresarial de Panama © 2020</p>
                </div>
            </div>
        
    </div>
        )
        
}
export default LandingPage