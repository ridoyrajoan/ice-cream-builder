import React from 'react';
import classes from './Item.module.css';
import {countBy} from 'lodash';

const Item = ({name, add, remove, scoops ={}, price}) => {
    const scoopsCount = countBy(scoops);
    console.log(scoopsCount)
    return (
        <li className={classes.item}>
            <span>{name}</span>
            <strong>{price}</strong>

            {scoopsCount[name] >= 0 ? (<span className={classes.quantity}>{scoopsCount[name]}</span>) : null}

            <div className="right">
                <button onClick={add.bind(this, name)} type="button" className={[classes.plus, "rounded"].join(' ')}>+</button>
                <button onClick={remove.bind(this, name)} disabled={!(scoopsCount[name] >= 0)} type="button" className={[classes.minus, "rounded"].join(' ')}>-</button>
            </div>
        </li>
    )
}

export default Item
