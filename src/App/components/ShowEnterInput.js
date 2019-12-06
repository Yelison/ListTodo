import React from 'react';


class ShowEnterInput extends React.Component {

    
    render() {

        return (
            this.props.data.map((name, index) => {
                return (
                    name.map(val => (
                        <div className="show-enter-input" 
                            
                            key={Math.floor((Math.random() * 1000) + 1)}
                        >
                        <button 
                            onClick={() => {this.props.setTags([...this.props.tags, val])}}
                            onKeyUp={e => {
                                if(e.keyCode === 40){
                                    this.props.focusOpcions(e, index)
                                }
                                console.log(document.querySelectorAll("#show-enter-input"))
                            }}
                        >{val}
                        </button>
                    </div>
                    ))
                )
            })
        )
    }
}

export default ShowEnterInput;