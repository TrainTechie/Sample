import React from 'react'
import './App.css';
function NumberList(prop) {
    const numbers = prop.arr;
    const listItems = numbers.map((hello) =>
    <li>{hello}<br/></li>
    );
    return (
        <div>
        <ul>{listItems}</ul>
        </div>
        );
}

export default NumberList