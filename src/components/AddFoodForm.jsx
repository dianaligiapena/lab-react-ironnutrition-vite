import { Divider, Input } from 'antd';
import { useState } from 'react';
import React from 'react';

// Iteration 4
function AddFoodForm( {newFood} ) {
    const [name, setName] = useState('');
    const [image, setImage] = useState('');
    const [calories, setCalories] = useState('');
    const [servings, setServings] = useState(1);

    const handleName = (event) => setName(event.target.value);
    const handleImage = (event) => setImage(event.target.value);
    const handleCalories = (event) => setCalories(event.target.value);
    const handleServings = (event) => setServings(event.target.value);
    
    const handleSubmit = (event) => {
        event.preventDefault();
    
        newFood( { name, image, calories, servings } );
    
        setName('');
        setImage('');
        setCalories('');
        setServings(1);
    };

    return (
        <form onSubmit={handleSubmit} >
            <Divider>Add Food Entry</Divider>

            <label>Name</label>
            <Input value={name} type="text" onChange={handleName} />

            <label>Image</label>
            <Input value={image} type="text" onChange={handleImage} />

            <label>Calories</label>
            <Input value={calories} type="number" onChange={handleCalories} />

            <label>Servings</label>
            <Input value={servings} type="number" onChange={handleServings} />

            <button type="submit">Create</button>
        </form>
    );
}

export default AddFoodForm;