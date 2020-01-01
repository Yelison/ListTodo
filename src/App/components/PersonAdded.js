import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import uuid from 'uuid';

import '../css/personAdded.css';

const PersonAdded = props => {
  const fullName = props.name + ' ' + props.lastName;
  const shortName = () => {
    if (fullName.length > 17){
      let lastNameShort = props.lastName.split(" ");
      if(lastNameShort.length > 1){
        
      }
    }
  }
  shortName();
  return (
    <Fragment>
      <div className='person'>
        <div className='info-person'>
          <div className='name-email-img'>
            <img src={props.img} />
            <div className='name-email'>
              <div className="name">
                <p>{fullName}</p>
              </div>
              <div className="email">
                <p>{props.email}</p>
              </div>
            </div>
          </div>
          <div className='tags'>
            <ul >
              {props.tags.map(({ name, pageWeb }) => {
                const index = name.indexOf("(");
                const tag = index !== -1 ? name.substring(index, -1) : name;
                return (
                <li key={uuid.v4()}>
                  <a href={pageWeb} target='_blank'>
                    {tag}
                  </a>
                </li>
              )})}
            </ul>
          </div>
        </div>
      </div>
    </Fragment>
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
