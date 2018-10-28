import React, { Component } from 'react';
import './Home.css';
import About from './About';
import Footer from './Footer';
import logo from '../assets/hack.png';
import FontAwesome from 'react-fontawesome';

class Home extends Component {

    render() {
        return (
            <div>
                <div className="slide">
                    <div className="cover">
                        <div>
                            <p >Fixter y Peanut Cowork te invitan al</p>
                            <br/>
                            <h1>Hackathon</h1>
                            <h2 className="titulo">24 y 25 de Noviembre 2018</h2>
                            <FontAwesome className="icono" name="angle-down"/>
                        </div>
                    </div>
                </div>

                <About />
                <Footer />
            </div>
        );
    }
}

export default Home;