import React, { Component } from 'react';
import uuid from 'uuid';
import '../css/tags.css';

class TagsComponent extends Component {
	render() {
		return this.props.children.tags.map((tag) => (
			<div className="each-tag" key={uuid.v4()}>
				<p>{tag}</p>
				<input
					type="button"
					value="x"
					onClick={() => {
						let index = this.props.children.tags.filter((i) => i !== tag);
						this.props.children.setTags(index);
					}}
				/>
			</div>
		));
	}
}

export default TagsComponent;
