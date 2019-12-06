import React from 'react';
import ReactDOM from 'react-dom';

import '../css/tags.css';

export const tagsData = []
export const tagsEl = () => {

        


    try {
        const inputEl = document.getElementById('tags');
        const tagContent = document.getElementById('tag-content');

        if (buttonX.length){

        }
        inputEl.addEventListener('keydown', event => {
            const p = document.createElement("p");
            const div = document.createElement("div");
            const button = document.createElement("button");

            if (event.keyCode === 13){
                event.preventDefault();
                    
                div.setAttribute("class", "each-tag");
                p.innerText = inputEl.value;
                button.innerText = "x";

                if(p.innerText !== ""){
                    div.append(p);
                    div.append(button);
                }
                
                tagContent.append(div);
                    inputEl.value = "";
                    // tagsData.push(el.value);
            }
        }


        );
    }
    catch { ""
    }



};
