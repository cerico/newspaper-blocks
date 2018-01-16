import React from 'react';
const classNames = require('classnames');
import styles from './header.css';

const Header = (props) => {

    return(
      <header className={styles.header}>
        <div className={styles.sectionTitle}>{props.sectionTitle}</div>
        <h1 style={{'fontFamily':props.fonts.headline,'borderColor':props.colours.fg}} >{props.top.headline}</h1>
        <p  style={{'fontFamily':props.fonts.text}}>{props.top.text}</p>
      </header>
    )
}

export default Header

