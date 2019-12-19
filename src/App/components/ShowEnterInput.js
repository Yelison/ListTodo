import React, { Fragment } from 'react';
import uuid from 'uuid';
import '../css/showEnterInput.css';

class ShowEnterInput extends React.Component {
  render() {
    return (
      <div className='show-enter-input'>
        {this.props.dataLf.map((val, index) => (
          <Fragment key={uuid.v4()}>
            <button
              className='result-search'
              onKeyUp={e => {
                this.props.focusOpcions(e, index);
                document.getElementById('tags').value = document.activeElement.innerHTML;
              }}
              onClick={() => {
								this.props.setTags([...this.props.tags, val.name]);
								this.props.setInputText('');
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
