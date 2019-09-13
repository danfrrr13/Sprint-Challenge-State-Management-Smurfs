import React, { useState } from 'react';

import { addSmurf } from '../../store/actions/';

import { connect } from 'react-redux';

const SmurfForm = ({ addSmurf, isAdding }) => {
    const [input, setInput] = useState({
        name: '',
        age: '',
        height: ''
    });
    const handleChange = e => {
        setInput({ ...input, [e.target.name]: e.target.value });
    };
    const handleSubmit = e => {
        e.preventDefault();
        console.log(input);
        if (input.name.length > 0 && input.age.length > 0 && input.height.length > 0) {
            addSmurf(input);
        } else {
            alert('Please make sure all fields are filled before submitting.');
        };
        setInput({
            name: '',
            age: '',
            height: ''
        });
    };
    if (isAdding) {
        return <p>Adding new Smurf...</p>
    } else {
        return (
            <div className='SmurfForm'>
                <form onSubmit={handleSubmit}>
                    <input placeholder='name' name='name' value={input.name} onChange={handleChange} />
                    <input placeholder='age' name='age' value={input.age} onChange={handleChange} />
                    <input placeholder='height' name='height' value={input.height} onChange={handleChange} />
                    <input type='submit' />
                </form>
            </div>
        );
    }
    
};

const mapStateToProps = state => {
    return {
        isAdding: state.isAdding
    };
};

export default connect(
    mapStateToProps,
{
    addSmurf
})(SmurfForm);