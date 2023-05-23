import React from 'react';

const FoodItem = ({foodId : id, foodName: fName, price}) => {

    // console.log('props',props);
    return (

        // <li id={props.foodId}>{props.foodName} ({props.price}원)</li>
        <li id={id}>{fName} ({price}원)</li> //destructuring
    );
};

export default FoodItem;