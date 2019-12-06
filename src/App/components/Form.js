import React, { useState } from 'react';
import TagsComponent from './TagsComponent';
import dataLf from '../data/languajeAndFrameworks';
import ShowEnterInput from './ShowEnterInput';
import '../css/showEnterInput.css'
import '../css/form.css';

const Form = (props) => {
    const [name, setName ] = useState('(Name)');
    const [lastName, setLastName] = useState('(LastName)');
    const [img, setImg] = useState('http://placehold.it/150x150');
    const [tags, setTags] = useState([]);
    const [description, setDescription] = useState('A little description here!!!!');
    const [data, setData] = useState([]);
    const sets = [
        {
            type: "text",
            placeholder: "First name",
            id: "fname",
            name: "firstname",
            set: setName,
        },
        {
            type: "text",
            placeholder: "Last name",
            id: "lname",
            name: "lasttname",
            set: setLastName,
        },
        {
            type: "text",
            placeholder: "Imagen (150 x 150)",
            id: "img",
            name: "firstname",
            set: setImg,
        },
        {
            type: "text",
            placeholder: "Description",
            id: "description",
            name: "description",
            set: setDescription,
        }
    ];

    const focusOpcions = (e, index = 0) => {
        if(e.keyCode === 40) {
            document.querySelectorAll(".show-enter-input button")[index].focus();
        };
    }
    return (

        <form className="contentForm" autoComplete="off">
            <div className="contentInput">
            {sets.map(({placeholder, id, name, set, type}) => (
                <input
                    key={name + id}
                    type={type}
                    id={id}
                    name={name}
                    placeholder={placeholder}
                    onChange={e => set(e.target.value)}
                />
            ))}

            <div id="tags-list">
                <div id="tag-content">
                    <TagsComponent>
                        {tags}
                    </TagsComponent>
                </div>
                    <input 
                            id="tags" 
                            type="search" 
                            name="tags" 
                            onChange={e => {
                                e.target.value ? 
                                setData([dataLf.map(({name}) => name).filter(eachName => eachName.includes(e.target.value))]): 
                                setData([])
                            }}
                            onKeyUp={e => {
                                if (e.keyCode === 13){
                                    setTags([...tags, e.target.value])
                                    e.target.value = "";
                                }
                                focusOpcions(e);
                            }}/>

            <div id="show-enter-input-content">
                <ShowEnterInput 
                    data={data}
                    dataLf={dataLf}
                    setTags={setTags}
                    tags={tags}
                    focusOpcions={focusOpcions}
                    />
            </div>
            </div>
                <input 
                    type="button"  
                    value="Add person" 
                    onClick={() => {
                        props.setPeopleList([...props.peopleList, {name, lastName, img, tags, description}]);
                        }}/>
            </div>
        </form>
)};

export default Form;