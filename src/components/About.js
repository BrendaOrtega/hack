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
                    <div className="float-flex">
                        <div className="reward-list">
                            <ul>
                                <li><i className="fas fa-check"></i> Coding</li>
                                <li><i className="fas fa-check"></i> Pastes</li>
                                <li><i className="fas fa-check"></i> Aire Freso</li>
                                <li><i className="fas fa-check"></i> Swag</li>
                            </ul>
                        </div>

                    </div>
                    <div style={{diplay:"flex", textAlign:"center"}}>
                    <p>Av. Tecnológico de Monterrey 308, 42086 Pachuca de Soto
                        </p> <p>24 de Noviembre 10:00 am</p>
                    </div>
                </div>
            </div>
        );
    }
}

export default About;