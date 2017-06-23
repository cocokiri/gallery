import React, {Component} from 'react';
import './App.css';
import LazyLoad from 'react-lazy-load';
import NameField from "./NameField";
import ImageCaption from "./ImageCaption";

class Image extends Component {
    constructor(props) {
        super(props)
        this.state = {
            id: "none", isBig: false
        };
        this.myname = props.name ? <NameField name={props.name}/> : "";
        this.mycaption = props.caption ? <ImageCaption caption={props.caption}/> : "";


    }

    textfield(name, caption) {
        if (name && !caption) {
            return name;
        }
        if (caption) {
            return (<div className="textfield">
                    {name}
                    {caption}
                </div>
            );
        }
    }


    handleClick() {
        this.setState({isBig: !this.state.isBig});

        this.state.isBig ? this.setState({id: "none"}) : this.setState({id: "expanded"});
    }


    render() {
        return (
            <section className="imageWrap">

                <img className={this.props.class} id={this.state.id} src={this.props.source}
                     onClick={() => this.handleClick()}
                     alt="Illustration">
                </img>
                {/*{this.span}*/}
                {this.textfield(this.myname, this.mycaption)}

            </section>
        )
    }
}

export default Image;
