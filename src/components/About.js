import React, { Component } from 'react';
import './Home.css';


const img = "https://images.pexels.com/photos/711009/pexels-photo-711009.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940";

class About extends Component {

    render() {
        return (
            <div className="about">
                <div className="flex">
                    <div className="box_about">
                        <h2>¿Qué es un hackathon?</h2>
                        <p>Es una competencia de programación colectiva para lograr una meta común, en donde
                        llevas al máximo tus capacidades tecnólogicas para crear, disenar y desarrollador
                        un producto digital completamente nuevo o innovador.</p>
                        <p>
                            Forma un equipo de 2 o 3 integrantes y construye una solución desde cero
                            en 36 horas ininterrumpidas. Obtendrás ayuda de expertos de la industria
                            durante el evento. Podrás utilizar e integrar las últimas tecnologías
                            para acelerar tu desarrollo y proponer soluciones atractivas.

                        </p>
                    </div>
                    <div className="box_about owl">
                        <div className="owl_box">

                        </div>
                    </div>
                </div>
                <div className="pad">
                    <div className="fix" style={{backgroundImage:`url("https://images.pexels.com/photos/953216/pexels-photo-953216.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940")`}}>
                        <div className="cover">
                            <div className="">
                                <h1 >Descarga nuestra app</h1>
                                <div  className="fl">
                                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/Download_on_the_App_Store_Badge.svg/2000px-Download_on_the_App_Store_Badge.svg.png" alt=""/>
                                    <img src="https://mobileport.com.mx/wp-content/uploads/2017/11/googleplay_button_es.png" alt=""/>
                                </div>
                                <br/>
                                <p >No es solo una reunión, es una experiencia.</p>
                            </div></div>
                    </div>
                </div>
            </div>
        );
    }
}

export default About;