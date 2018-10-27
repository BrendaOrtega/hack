import React, { Component } from 'react';
import './Home.css';


const img = "https://images.pexels.com/photos/711009/pexels-photo-711009.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940";

class About extends Component {

    render() {
        return (
            <div className="about">
                <div className="flex">
                    <div className="box_about">
                        <h2>DONDE LOS NEGOCIOS PROSPERAN</h2>
                        <p>Creamos un entorno que mejorará tu productividad, innovación y colaboración.</p>
                        <p>Diseñamos y organizamos encuentros o ruedas de negocio que, combinadas con una experiencia
                            turística inolvidable se conviertan en una propuesta de valor para quienes
                            buscan incrementar las relaciones comerciales de sus agremiados.
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