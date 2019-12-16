import React, { Fragment } from 'react';
import uuid from 'uuid';
import '../css/showEnterInput.css';

class ShowEnterInput extends React.Component {
  render() {
    return (
      <div className='show-enter-input'>
        {this.props.dataLf.map((val, index = 0) => (
          <Fragment key={uuid.v4()}>
            <button
              className='result-search'
              onKeyUp={e => {
								// if(e.keyCode === 40){
								// 	this.props.setPlaceHolderInput(val.name);
								// }
								
                this.props.focusOpcions(e, index);
              }}
              onClick={() => {
								this.props.setTags([...this.props.tags, val.name])
								document.getElementById('tags').value = '';
                document.getElementById('tags').focus();
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
