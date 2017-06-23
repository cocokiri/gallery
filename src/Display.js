import React, {Component} from 'react';
import './App.css';
import LazyLoad from 'react-lazy-load';
import Image from './Image';

class Display extends Component {
    constructor(props) {
        super(props)
        this.state = {};
        this.elements = [];
        console.log(props);
        let that = this;



        props.segment.forEach(function (thumb) {


            that.elements.push(
                <div>
                    {/*<section className="imageWrap">*/}
                        {/*<a href={thumb.path} target="_blank" rel="noopener noreferrer">*/}
                            {/*<LazyLoad offsetBottom={100}>*/}
                            <Image class={that.props.class} source={thumb.path || thumb} name={thumb.name} caption={thumb.caption} />
                            {/*</LazyLoad>*/}
                        {/*</a>*/}

                        {/*<span className="textfield">*/}
                        {/*<figcaption>{thumb.name}</figcaption>*/}
                        {/*<br />*/}
                            {/*{thumb.caption}*/}
                    {/*</span>*/}

                    {/*</section>*/}
                </div>
            )
        })
    }


    handleClick() {
        this.setState({
            id: "#expanded"
        })
    }

    render() {
        return (
            <section className="flexContain">
            {this.elements.map(el => el)}
            </section>
        )
    }
}

export default Display;
