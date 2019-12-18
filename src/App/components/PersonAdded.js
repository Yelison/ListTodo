import React from 'react';
import PropTypes from 'prop-types';
import '../css/personAdded.css';

const PersonAdded = props => {
  return (
    <div className='person-content'>
      <div className='person'>
        <div className='info-person'>
          <img src={props.img} />
          <div>
            <div className='name'>
              <h1>{props.name + ' ' + props.lastName}</h1>
            </div>
            <div className='description'>
              <p>{props.email}</p>
            </div>
            <div className='tags'>
              <ul>
                <label className='Languaje'>Languaje</label>
                {props.tags.map(({ name, pageWeb, type }) => {
                  if (type === 'Languaje') {
                    return (
                      <li>
                        <a href={pageWeb} target='_blank'>
                          {name}
                        </a>
                      </li>
                    );
                  }
                })}
              </ul>
              <ul>
                <label className='Frameworks'>Frameworks</label>
                {props.tags.map(({ name, pageWeb, type }) => {
                  if (type === 'Framework') {
                    return (
                      <li>
                        <a href={pageWeb} target='_blank'>
                          {name}
                        </a>
                      </li>
                    );
                  }
                })}
              </ul>
            </div>
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
