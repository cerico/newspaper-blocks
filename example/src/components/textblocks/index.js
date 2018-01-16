import React from 'react';
const classNames = require('classnames');
import styles from './block.css';
import Header from './header';
import BlockItem from './BlockItem';
import './fonts.css'

const Block = ({data}) => {

    return(
      2 == 2  ? 
        <section style={{'backgroundColor':data.colours.bg,'color':data.colours.fg}} className={styles.main}>
          <Header {...data} />
          <div className={styles.itemWrapper}>      
            {data.items.map((product, index) =>
              <BlockItem {...data} product={product} key={index}/>)        
            }
          </div>  
      </section> 
        : null
    )
  }

  export default Block



