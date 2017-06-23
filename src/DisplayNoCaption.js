import React, {Component} from 'react';
import './App.css';
import LazyLoad from 'react-lazy-load';

class DisplayNoCaption extends Component {
    constructor(props) {
        super(props)
        this.state = {};
        this.elements = [];
        console.log(props);
        let that = this;

        props.segment.forEach(function (thumb) {
            that.elements.push(
                <div>
                    <section className="imageWrap">
                        {/*<a href={thumb} target="_blank" rel="noopener noreferrer">*/}
                            <LazyLoad offsetBottom={200}>
                            <img className="imgsmall" src={thumb} alt="Sketch"/>
                            </LazyLoad>
                        {/*</a>*/}
                    </section>
                </div>
            )
        })
    }

    render() {
        return (
            <section className="flexContainSmall">
            {this.elements.map(el => el)}
            </section>
        )
    }
}

export default DisplayNoCaption;
