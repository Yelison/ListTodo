import React, { useState } from 'react';

import '../css/form.css';
const Form = (props) => {

    const [name, setName ] = useState('(Name)');
    const [lastName, setLastName] = useState('(LastName)');
    const [img, setImg] = useState('http://placehold.it/150x150');
    const [tags, setTags] = useState(['Tags']);
    const [description, setDescription] = useState('A little description here!!!!');
    const sets = [
        {
            placeholder: "First name",
            id: "fname",
            name: "firstname",
            set: setName,
        },
        {
            placeholder: "Last name",
            id: "lname",
            name: "lasttname",
            set: setLastName,
        },
        {
            placeholder: "Imagen (150 x 150)",
            id: "img",
            name: "firstname",
            set: setImg,
        },
        {
            placeholder: "Tags",
            id: "tags",
            name: "tags",
            set: setTags,
        },
        {
            placeholder: "Description",
            id: "description",
            name: "description",
            set: setDescription,
        }
    ];

    return (
    <div className="contentForm">
        <div >
        {sets.map(({placeholder, id, name, set}) => (
            <input
                key={name + id}
                type="text"
                id={id}
                name={name}
                placeholder={placeholder}
                onChange={e => set(e.target.value)}
            />
        ))}
            <input 
                type="submit"  
                value="Add person" 
                onClick={() => props.setPeopleList([...props.peopleList, {name, lastName, img, tags, description}])}/>
        </div>
    </div>
)};

export default Form;