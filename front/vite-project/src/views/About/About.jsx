import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import aboutus from "../../assets/aboutus.mp4"
import styles from "./About.module.css"
import trabajadoresbanco from "../../assets/trabajadoresbanco.png"
import desarrolloecono from "../../assets/desarrolloecono.png"
import presenciapaises from "../../assets/presenciapaises.png"
import solucionfinanciera from "../../assets/solucionfinanciera.png"
export default function About() {
    return (
        <Container>
            <Row>
                <Col>
                    <h2 className={styles.abouttitle}>NOSOTROS</h2>
                    <br />
                    <br />
                    <div className="d-flex justify-content-center">
                        <video controls width="640" height="360">
                            <source src={aboutus} type="video/mp4" />
                            Your browser does not support the video tag.
                        </video>
                    </div>
                    <div className={styles.imgtextContainer}>
                        <img src={trabajadoresbanco} />
                        <p>Somos un grupo financiero líder con más de 146 años de experiencia, evolucionando para enfrentar los desafíos de un mundo en constante cambio.</p>
                    </div>
                    <div className={styles.imgtextContainer}>
                        <img src={desarrolloecono} />
                        <p>Guiados por la ética y la integridad, buscamos promover el desarrollo económico sostenible para el bienestar de todos.</p>
                    </div>
                    <div className={styles.imgtextContainer}>
                        <img src={presenciapaises} />
                        <p>Con cerca de 30,000 colaboradores y presencia en múltiples países, incluyendo Colombia, Panamá, Guatemala y El Salvador, hemos sido parte de la Bolsa de Valores de Nueva York (NYSE) durante 25 años, siendo la primera entidad financiera colombiana en cotizar en ese mercado.</p>
                    </div>
                    <div className={styles.imgtextContainer}>
                        <img src={solucionfinanciera} />
                        <p>Ofrecemos soluciones financieras y no financieras para personas, emprendedores, pymes, empresas e instituciones, mientras también invertimos en iniciativas educativas, emprendimientos y la protección del medio ambiente, impulsando transformaciones positivas en la sociedad. Además, tenemos acceso a fondeo en los mercados de capitales locales e internacionales.</p>
                    </div>  
                </Col>
            </Row>
        </Container>
    );
}
