import React, { Fragment } from 'react';
import uuid from 'uuid';
import '../css/showEnterInput.css';

class ShowEnterInput extends React.Component {
  render() {
    return (
      <div className='show-enter-input'>
        {this.props.dataLf.map((val, index) => {
          const tagsEl = document.getElementById('tags');
          const clearInputText = () => this.props.setInputText('');
          const clearInputTextFocusTagsElAndClearTagsEl = () => {
            clearInputText();
            tagsEl.value = '';
            tagsEl.focus();
          };

          return (
            <Fragment key={uuid.v4()}>
              <button
                className='result-search'
                onKeyUp={e => {
                  if (e.keyCode === 8) {
                    clearInputTextFocusTagsElAndClearTagsEl();
                  } else {
                    this.props.focusOpcions(e, index);
                    tagsEl.value = document.activeElement.innerHTML;
                  }
                }}
                onClick={() => {
                  this.props.setTags([...this.props.tags, val.name]);
                  clearInputTextFocusTagsElAndClearTagsEl();
                }}
              >
                {val.name}
              </button>
            </Fragment>
          );
        })}
      </div>
    );
  }
}
export default ShowEnterInput;
