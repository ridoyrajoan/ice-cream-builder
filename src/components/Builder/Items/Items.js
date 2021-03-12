import React from 'react';
import Item from './Item/Item'

const Items = ({items, add, remove, scoops}) => {
    const flavors = Object.keys(items);
    const prices = Object.values(items);
    console.log(prices);
    return (
        <div>
            <ul>
                {flavors.map((flavor, index) => (
                    <Item key={flavor} name={flavor} add={add} remove={remove} scoops={scoops} price={prices[index]}/>
                ))}
            </ul>
        </div>
    )
}

export default Items
