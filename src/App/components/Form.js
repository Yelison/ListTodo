import React, { useState } from 'react';
import TagsComponent from './TagsComponent';
import dataLf from '../data/languajeAndFrameworks';
import ShowEnterInput from './ShowEnterInput';
// import clearAndMakeFocus from '../utils/clearAndMakeFocus';
import '../css/form.css';

const Form = props => {
  const [name, setName] = useState('(Name)');
  const [lastName, setLastName] = useState('(LastName)');
  const [img, setImg] = useState('http://placehold.it/150x150');
  const [tags, setTags] = useState([]);
  const [description, setDescription] = useState('A little description here!!!!');
  const [placeHolderInput, setPlaceHolderInput] = useState('');
  const [inputText, setInputText] = useState('');
  const sets = [
    {
      type: 'text',
      placeholder: 'First name',
      id: 'fname',
      name: 'firstname',
      set: setName,
    },
    {
      type: 'text',
      placeholder: 'Last name',
      id: 'lname',
      name: 'lasttname',
      set: setLastName,
    },
    {
      type: 'text',
      placeholder: 'Imagen (150 x 150)',
      id: 'img',
      name: 'firstname',
      set: setImg,
    },
    {
      type: 'text',
      placeholder: 'Description',
      id: 'description',
      name: 'description',
      set: setDescription,
    },
  ];

  let suggestions = dataLf.filter(({ name }) =>
    inputText ? name.includes(inputText) : ''
  );

  // const t = suggestions.map(({ name, pageWeb, type }) =>
  //   tags.map(tag => {
  //     if (name === tag) {
  //       delete suggestions[suggestions.indexOf(name)];
  //     }
  //   })
  // );

  // console.log(t);

  const nameLanguajes = dataLf.map(({ name }) => name);
  console.log(nameLanguajes);
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
        {sets.map(({ placeholder, id, name, set, type }) => (
          <input
            key={id}
            type={type}
            id={id}
            name={name}
            placeholder={placeholder}
            onChange={e => set(e.target.value)}
          />
        ))}
        <div id='tags-list'>
          <div id='tag-content'>
            <TagsComponent>{{ tags, setTags }}</TagsComponent>
          </div>
          <input
            id='tags'
            type='search'
            name='tags'
            placeholder={placeHolderInput}
            onKeyUp={e => {
              console.log(inputText);
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
            />
          </div>
        </div>
        <input
          type='button'
          name='addPerson'
          value='Add person'
          onClick={() => {
            props.setPeopleList([
              ...props.peopleList,
              { name, lastName, img, tags, description, inputText, dataLf },
            ]);
          }}
        />
      </div>
    </form>
  );
};

export default Form;
