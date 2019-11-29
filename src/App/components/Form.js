import React from 'react';
import '../css/form.css'

const Form = () => (

    <div className="contentForm">
        <form>
            <input type="text" id="fname" name="firstname" placeholder="Your name.." />

            <input type="text" id="lname" name="lastname" placeholder="Your last name.." />

            <input type="text" id="lname" name="lastname" placeholder="A imagen.." />

            <input type="text" id="lname" name="lastname" placeholder="Your tags.." />

            <input type="submit" value="Add person" />
        </form>
    </div>

);

export default Form;
