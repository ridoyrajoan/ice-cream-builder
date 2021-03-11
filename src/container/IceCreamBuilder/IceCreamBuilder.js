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
    };

    addScoop = (scoop) => {
        const {scoops, items} = this.state;
        const workingScoops = [...scoops];
        workingScoops.push(scoops);

        this.setState({
            scoops : workingScoops,
            totalPrice: items[scoop],
        });
    };


    render() {
        const {items, totalPrice} = this.state;
        return (
            <div className={[classes.container, "container"].join(' ')}>
                <IceCream />
                <Builder items={items} price={totalPrice}/>
            </div>
        )
    }
}
