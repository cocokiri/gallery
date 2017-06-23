import React, {Component} from 'react';
import './App.css';
import myStyle from './css/myStyles.css.js'


console.log(myStyle);
console.log(myStyle.button);

const Button = () => (
    <div>
        <div>HALAO</div>
        <button style={myStyle.myButton}>BUUASDPSJDPOADJPODAOPSDJ</button>
    </div>
);

export default Button;
