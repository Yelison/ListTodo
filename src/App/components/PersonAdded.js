import React from 'react';
import PropTypes from 'prop-types';
import uuid from 'uuid';

import '../css/personAdded.css';

const PersonAdded = props => {
  return (
    <div className='person-content' >
      <div className='person'>
        <div className='info-person'>
          <div className='name-email-img'>
            <img src={props.img} />
            <div className='name'>
              <h1>{props.name + ' ' + props.lastName}</h1>
              <p>{props.email}</p>
            </div>
          </div>
          <div className='tags'>
            <ul >
              {props.tags.map(({ name, pageWeb }) => (
                <li key={uuid.v4()}>
                  <a href={pageWeb} target='_blank'>
                    {name}t
                  </a>
                  
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

PersonAdded.propTypes = {
  name: PropTypes.string.isRequired,
  lastName: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  tags: PropTypes.array,
  img: PropTypes.string,
};

PersonAdded.defaultProps = {
  tags: [],
};

export default PersonAdded;
