import React from "react";
import { fadeIn, tada,bounce } from "react-animations";
import { StyleSheet, css } from "aphrodite";
import { Image } from "semantic-ui-react";
import FaBeer from 'react-icons/lib/io/beer';

export default () => (
  <div className={css(styles.center,styles.animation)}>
    <div className={css(styles.container)}>
        <h1>LETS HANGOUT ><span className={css(styles.icon)}><FaBeer /></span></h1>
        <h4>Loading....</h4>
    </div>
  </div>
);

const styles = StyleSheet.create({
  container: {
    textAlign: "center",
    color : "#424242"
  },
  center : {
    position: "absolute",
    margin: "auto",
    top: "0",
    right: "0",
    bottom: "0",
    left: "0",
    width: "auto",
    height: "200px",
    fontFamily : "Lato-light",
    fontSize : "12"

  },
  icon : {
    fontSize : 64
  },
  animation: {
    animationName: fadeIn,
    animationDuration: "1s"
  },
  
});
