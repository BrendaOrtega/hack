import React, { Component } from 'react';
import FontAwesome from 'react-fontawesome';

class Footer extends Component {

    render() {
        return (
            <div className="footer" >
                <div className="footer_box">
                    <div>
                        <div>
                            <div>
                                <h1 style={{ color: 'white' }}>¿Quieres participar? Registrate aquí</h1>
                                <div className="fl">
                                    <a href="https://mefithernndez.typeform.com/to/ppHVN0" target="_blank"><button className="clickMe" style={{ padding: '10px 20px', borderRadius: '5px', fontSize: '24px', fontWeight: '400', cursor: 'pointer' }}>
                                        <span> Click aquí </span>
                                    </button></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <section className="footer_data flex">
                    <div className="ft">
                        <span>Sobre Fixter</span>
                        <FontAwesome name="facebook-square" />
                        <FontAwesome name="twitter-square" />
                        <FontAwesome name="instagram" />
                    </div>
                    <div className="ft">
                        <span>Sobre Peanut CoWork</span>
                        <FontAwesome name="facebook-square" />
                        <FontAwesome name="twitter-square" />
                        <FontAwesome name="instagram" />
                    </div>
                </section>
            </div>
        );
    }
}

export default Footer;