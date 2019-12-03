import React from 'react';
import PropTypes from 'prop-types';
import '../css/personAdded.css';

const PersonAdded = (props) => {
    
    return (
	<div className="person-content">
		<div className="person">
			<div className="info-person">
				<img src={props.img} />
				<div>
					<div className="name">
						<h1>{props.name + ' ' + props.lastName}</h1>
					</div>
					<div className="description">
						<p>{props.description}</p>
					</div>
					<div className="tags">
						<p>{props.tags}</p>
					</div>
				</div>
			</div>
		</div>
	</div>
)};

PersonAdded.propTypes = {
    name: PropTypes.string.isRequired,
    lastName: PropTypes.string.isRequired,
    description: PropTypes.string,
    tags: PropTypes.array,
    img: PropTypes.string.isRequired
}

PersonAdded.defaultProps = {
    description: '',
    tags: [],
}

export default PersonAdded;
