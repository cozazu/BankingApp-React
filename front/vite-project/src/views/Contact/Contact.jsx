import React from 'react';
import servicioalcliente from "../../assets/servicioalcliente.png"


export default function Contact() {
    return (
        <div className="container">
            <h2 className="text-center mb-5">CONTACTANOS</h2>
            <div className="row">
                <div className="col-md-6">
                    <img src={servicioalcliente} alt="servicioalcliente" className="img-fluid" />
                </div>
                <div className="col-md-6">
                    <div className="contact-info">
                        <h3>Información de contacto</h3>
                        <p>Puedes contactarnos de las siguientes maneras:</p>
                        <ul>
                            <li>Teléfono: 01-800-0982345</li>
                            <li>Correo electrónico: iing@gmail.com</li>
                            <li>Dirección: Cra 48d # 188 - 01</li>
                        </ul>
                    </div>
                    <div className="contact-form">
                        <h3>Formulario de contacto</h3>
                        <form>
                            <div className="mb-3">
                                <label htmlFor="nombre" className="form-label">Nombre:</label>
                                <input type="text" className="form-control" id="nombre" />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="correo" className="form-label">Correo electrónico:</label>
                                <input type="email" className="form-control" id="correo" />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="mensaje" className="form-label">Mensaje:</label>
                                <textarea className="form-control" id="mensaje" rows="4"></textarea>
                            </div>
                            <button type="submit" className="btn btn-primary" style={{ backgroundColor: "rgb(254, 139, 8)", borderColor: "rgb(254, 139, 8)" }}>Enviar mensaje</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}