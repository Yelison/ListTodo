import React, { useState } from 'react';
import TagsComponent from './TagsComponent';
import dataLf from '../data/languajeAndFrameworks';
import ShowEnterInput from './ShowEnterInput';
import '../css/form.css';

const Form = props => {
  const [name, setName] = useState('');
  const [lastName, setLastName] = useState('');
  const [img, setImg] = useState('http://placehold.it/150x150');
  const [tags, setTags] = useState([]);
  const [email, setEmail] = useState('');
  const [placeHolderInput, setPlaceHolderInput] = useState('');
  const [startValidate, setStartValidate] = useState(false);
  const [inputText, setInputText] = useState('');
  const sets = [
    {
      type: 'text',
      placeholder: 'First name',
      id: 'fname',
      name: 'firstname',
      set: setName,
      value: name.length > 3,
    },
    {
      type: 'text',
      placeholder: 'Last name',
      id: 'lname',
      name: 'lasttname',
      set: setLastName,
      value: lastName.length > 3,
    },
    {
      type: 'text',
      placeholder: 'Imagen (150 x 150)',
      id: 'img',
      name: 'firstname',
      set: setImg,
      value: true,
    },
    {
      type: 'text',
      placeholder: 'email',
      id: 'email',
      name: 'email',
      set: setEmail,
      value: email.includes('@'),
    },
  ];

  const filterSuggestions = dataLf
    .filter(({ name }) => (inputText ? name.includes(inputText) : ''))
    .map(({ name }) => name)
    .filter(val => !tags.includes(val));

  const suggestions = dataLf.filter(({ name }) => filterSuggestions.includes(name));

  const objectsTags = dataLf.filter(({ name }) => tags.includes(name));

  const nameLanguajes = dataLf.map(({ name }) => name);

  let validate = sets.map(({ value }) => value).includes(false);

  const focusOpcions = (e, index = 0) => {
    const elBottons = i =>
      document.querySelectorAll('.show-enter-input button')[`${i}`].focus();
    const lenOfEle = document.querySelectorAll('.show-enter-input button').length;
    switch (e.keyCode) {
      case 40:
        if (index === 0) {
          index = lenOfEle - 1;
        } else {
          index--;
        }
        elBottons(index);
        // setPlaceHolderInput(e.currentTarget.innerText);
        break;
      case 38:
        if (index === lenOfEle - 1) {
          index = 0;
        } else {
          index++;
        }
        elBottons(index);
        // setPlaceHolderInput(e.currentTarget.innerText);
        break;
    }
  };

  return (
    <form className='contentForm' autoComplete='off'>
      <div className='contentInput'>
        {sets.map(({ placeholder, id, name, set, type, value }) => {
          return (
            <input
              key={id}
              type={type}
              id={id}
              name={name}
              style={!value && startValidate ? { border: '1px solid red' } : {}}
              placeholder={placeholder}
              onChange={e => {
                set(e.target.value);
              }}
            />
          );
        })}
        <div id='tags-list'>
          <div id='tag-content'>
            <TagsComponent>{{ tags, setTags }}</TagsComponent>
          </div>
          <input
            id='tags'
            type='search'
            name='tags'
            style={
              !Object.keys(objectsTags).length && startValidate
                ? { border: '1px solid red' }
                : {}
            }
            placeholder={placeHolderInput}
            onKeyUp={e => {
              switch (e.keyCode) {
                case 13 && nameLanguajes.includes(inputText):
                  setTags([...tags, inputText]);
                case 8:
                  if (!inputText) {
                    setTags(tags.slice(0, tags.length - 1));
                  }
                case 40:
                case 38:
                  if (suggestions.length) {
                    focusOpcions(e);
                  }
                default:
                  setInputText(e.target.value);
              }
            }}
          />
          <div id='show-enter-input-content'>
            <ShowEnterInput
              dataLf={suggestions}
              setTags={setTags}
              tags={tags}
              focusOpcions={focusOpcions}
              setPlaceHolderInput={setPlaceHolderInput}
              setInputText={setInputText}
            />
          </div>
        </div>
        <input
          type='button'
          name='addPerson'
          value='Add person'
          onClick={() => {
            if (!validate && Object.keys(objectsTags).length) {
              props.setPeopleList([
                ...props.peopleList,
                {
                  name,
                  lastName,
                  img,
                  tags: objectsTags,
                  email,
                  inputText,
                  dataLf,
                },
              ]);
            }
            setStartValidate(true);
          }}
        />
      </div>
    </form>
  );
};

export default Form;
