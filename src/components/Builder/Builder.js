import React from 'react';
import classes from './Builder.module.css';
import Items from './Items/Items';
import TotalPrice from './TotalPrice/TotalPrice';
// import Modal from './Modal/Modal';

const Builder = ({items}) => {
    return (
        <div className={classes.builder}>
            <h3>Build your own Ice Cream Sundae</h3>

            <Items items={items}/>

            <TotalPrice/>

            <button type="button" className={[classes.order, "rounded"].join(' ')}>
                Add to Cart
            </button>
        </div>
        // <Modal>Hello Modal</Modal>
    )
}

export default Builder
