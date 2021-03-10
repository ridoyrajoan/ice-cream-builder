import React from 'react';
import classes from './IceCream.module.css';
import Scoop from './Scoop/Scoop'

const IceCream = ({items}) => {
    const flavors = Object.keys(items);
    return (
        <div>
            <div className={classes.icecream}>
              <p className={classes.cone} />
              {/* <p>Please start adding scoops</p> */}
              {flavors.map((flavor) => (
                <Scoop key={flavor} scoop={flavor}/>
              ))}
              <div className={classes.cherry} />
            </div>
        </div>
    )
}

export default IceCream
