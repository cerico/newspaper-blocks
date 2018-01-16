import React from 'react';
import { connect } from 'react-redux';
const classNames = require('classnames');
import styles from './about.css';


class About extends React.Component  {

  render (){
   
    const style = {
      general: {
        display: 'flex',
        width:'50%',
        fontFamily: 'Inconsolata',
        justifyContent: 'left',
        marginLeft:'25%',
        color: '#484AB3',
        backgroundColor: 'F9F7EE',
        height:'1vh',
        position:'absolute'
      }
    }

    return(
      <div className={styles.grid} style={style.general}>
      about
      </div> 
    )
  }
}


export default About
