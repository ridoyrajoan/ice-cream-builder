import React, { Component } from 'react';
import IceCream from '../../components/IceCream/IceCream';
import Builder from '../../components/Builder/Builder';
import classes from './IceCreamBuilder.module.css';

export default class IceCreamBuilder extends Component {

    state = {
        items : {
            vanilla: 45,
            chocolate: 50,
            lemon: 35,
            orange: 40,
            strawberry: 60,
        },

        scoops: [],

        totalPrice: 0,
    }


    render() {
        const {items} = this.state;
        return (
            <div className={[classes.container, "container"].join(' ')}>
                <IceCream items={items} />
                <Builder items={items}/>
            </div>
        )
    }
}
