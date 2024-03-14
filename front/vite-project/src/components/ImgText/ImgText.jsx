import React from "react";
import styles from "./ImgText.module.css";

export default function ImgText() {
  return (
    <div className={styles.imgtextContainer}>
        <img src="https://st4.depositphotos.com/36694586/41921/v/1600/depositphotos_419213114-stock-illustration-business-team-video-conference-call.jpg" alt="reunion banco" />
        <p>Lorem ipsum dolor sit amet consectetur adipiscing elit nec curabitur cubilia, nostra tortor velit habitasse tristique cursus accumsan justo nibh cum, feugiat sociis phasellus viverra magnis imperdiet risus molestie malesuada. Bibendum vehicula placerat potenti sociis habitant proin congue, purus nec cras sed lacinia dictumst. Urna ut orci hac euismod arcu lobortis facilisi pretium, lacinia nam aliquet ultricies auctor et bibendum, odio sociis montes posuere primis vestibulum hendrerit.</p>
    </div>
  );
}