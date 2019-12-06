import React, { Component } from 'react';
import '../css/tags.css'

class TagsComponent extends Component {

    render() {
        return (
            this.props.children.map(tag =>
                <div className="each-tag" key={Math.floor((Math.random() * 1000) + 1)}>
                    <p>{tag}</p>
                    <button>x</button>
                </div>
            )
        );
    }
}

export default TagsComponent;