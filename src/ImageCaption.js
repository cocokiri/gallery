import React, {Component} from 'react';
import './App.css';
import LazyLoad from 'react-lazy-load';

function ImageCaption(props) {

    return (
        <div>
            <br />
            {props.caption}
        </div>
    )
}


export default ImageCaption;
