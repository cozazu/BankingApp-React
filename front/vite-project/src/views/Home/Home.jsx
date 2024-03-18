import React from 'react';
import { Carousel } from 'react-bootstrap';
import styles from './Home.module.css';
import carro from "../../assets/adquierecarro.png"
import serviicios from "../../assets/serviicios.png"
import ofrecemos from "../../assets/ofrecemos.png"

function Home() {
  return (
    <div className={styles.carouselcontainer}>
      <Carousel interval={1500}>
        <Carousel.Item>
          <img
            className="d-block w-50 mx-auto"
            src={ofrecemos}
            alt="First slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-50 mx-auto"
            src={serviicios}
            alt="Second slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-50 mx-auto"
            src={carro}
            alt="Third slide"
          />
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default Home;
