import React, { Component } from 'react';

class AddPlayerForm extends Component {

    state = {
        value: ''
    }

    // e point to the target property that point to the input property.
    // updating the value of the input.

    handleValueChange = ( e ) => {
        this.setState( { value: e.target.value } );
    }
    
    // e.preventDefault prevents the application to reload on the browser.
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.addPlayer(this.state.value)
        this.setState({ value: ''})
    }

    // handles the onsubmit function as soon the form is submited.
    render () {
        console.log(this.state.value);
        return (
            <div>
                <form onSubmit = { this.handleSubmit}>  
                    <input
                       type = "text"
                       value = { this.state.value }
                       onChange = { this.handleValueChange }
                       placeholder = "Enter a player's name "  
                    />
                     <input
                       type = "submit"
                       value = "Add Player "  
                    />
                </form>
            </div>
        )
    }
}

export default AddPlayerForm;


/* 
    Creating a controlled component

1. Initialize state for the value of the input.

2. Listen for changes on the input to detect when value is updated.

3. Create an event handler that updates the value state.

*/
