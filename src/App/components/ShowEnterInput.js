import React, { Fragment } from 'react';
import uuid from 'uuid';
import '../css/showEnterInput.css';

class ShowEnterInput extends React.Component {
	render() {
		return (
			<div className="show-enter-input" >
				{this.props.dataLf.map((val, index = 0) => (
					<Fragment key={uuid.v4()}>
						<button
							className="result-search"
							onKeyUp={(e) => {
								this.props.focusOpcions(e, index);
								if (e.keyCode === 8) {
									setTimeout(() => {
										document.getElementById('tags').focus();
										document.activeElement();
									}, 1);
								}
							}}
							onClick={() => {
								this.props.setTags([ ...this.props.tags, val.name ]);
							}}
						>
							{val.name}
						</button>
					</Fragment>
				))}
			</div>
		);
	}
}

export default ShowEnterInput;
