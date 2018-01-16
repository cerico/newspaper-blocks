import React from 'react';
import styles from './block-item.css';


const BlockItem = (props) =>  {

    return (
      <div className={styles.item}>
      <h3 style={{'fontFamily':props.fonts.headline}}>{props.product.headline}</h3>
       <hr style={{'borderColor':props.colours.fg}}/>
       <p style={{'fontFamily':props.fonts.text}}>{props.product.text}</p>
     </div>
    )
  
}

export default BlockItem