import React, { Component } from 'react';
import IceCream from '../../components/IceCream/IceCream';
import Builder from '../../components/Builder/Builder';
import classes from './IceCreamBuilder.module.css';

export default class IceCreamBuilder extends Component {

    state = {
        items : {},
        scoops: [],
        totalPrice: 0,
        loading: true,
    };

    componentDidMount() {
        fetch('https://ice-cream-flavors-default-rtdb.firebaseio.com/items.json').then(
            response => response.json().then((responseData) => {
                this.setState({
                    items: responseData,
                    loading: false
                })
            })
        )
    }

    addScoop = (scoop) => {
        const { scoops, items } = this.state;
        const workingScoops = [...scoops];
        workingScoops.push(scoop);
        this.setState((prevState) => {
            return {
                scoops: workingScoops,
                totalPrice: prevState.totalPrice + items[scoop],
            };
        });
    };

    removeScoop = (scoop) => {
        const { scoops, items } = this.state;
        const workingScoops = [...scoops];

        const scoopIndex = workingScoops.findIndex((sc) => sc === scoop);

        workingScoops.splice(scoopIndex, 1);
        this.setState((prevState) => {
            return {
                scoops: workingScoops,
                totalPrice: prevState.totalPrice - items[scoop],
            };
        });
    };


    render() {
        const {items, totalPrice, scoops} = this.state;
        if(this.state.loading) {
            return (
                <div className={[classes.container, "container"].join(' ')}>
                    <p>Loading Data..</p>
                </div>
            )
        }
        return (
            <div className={[classes.container, "container"].join(' ')}>
                <IceCream scoops={scoops}/>
                <Builder items={items} price={totalPrice} add={this.addScoop} remove={this.removeScoop} scoops={scoops}/>
            </div>
        )
    }
}
