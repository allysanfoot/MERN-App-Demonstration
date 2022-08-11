import React, { useState } from 'react';
import { useHistory } from "react-router-dom";

export const AddExercisePage = () => {

    const [name, setName] = useState('');
    const [reps, setReps] = useState('');
    const [weight, setWeight] = useState('');
    const [unit, setUnit] = useState('');
    const [date, setDate] = useState('');
    
    const history = useHistory();

    const addExercise = async () => {
        const newExercise = { name, reps, weight, unit, date };
        const response = await fetch('/exercises', {
            method: 'post',
            body: JSON.stringify(newExercise),
            headers: {
                'Content-Type': 'application/json',
            },
        });
        if(response.status === 201){
            alert("Successfully added the exercise!");
        } else {
            alert(`Failed to add exercise, status code = ${response.status}`);
        }
        history.push("/");
    };


    return (
        <>
        <article>
            <h2>Add to the exercise log</h2>
            <p>You can log your exercises here.</p>
            <form onSubmit={(e) => { e.preventDefault();}}>
                <fieldset>
                    <legend>Which exercise would you like to log?</legend>
                    <label for="name">Exercise Name</label>
                    <input
                        type="text"
                        placeholder="Name of exercise"
                        value={name}
                        onChange={e => setName(e.target.value)} 
                        id="name"
                        required="required" />
                    
                    <label for="reps">Number of Reps</label>
                    <input
                        type="number"
                        value={reps}
                        placeholder="Number of reps"
                        onChange={e => setReps(e.target.value)} 
                        id="reps"
                        min="0" 
                        required="required" />

                    <label for="weight">Weight</label>
                    <input
                        type="number"
                        placeholder="Weight of exercise"
                        value={weight}
                        onChange={e => setWeight(e.target.value)} 
                        id="weight"
                        min="0" 
                        required="required" />

                    <label for="unit">Unit of Weight</label>
                    <input
                        type="text"
                        value={unit}
                        placeholder="Unit of weight"
                        onChange={e => setUnit(e.target.value)} 
                        id="unit" 
                        required="required" />

                    <label for="date">Date of Exercise</label>
                    <input
                        type="date"
                        value={date}
                        onChange={e => setDate(e.target.value)} 
                        id="date" 
                        required="required" />

                    <label for="submit">
                    <button
                        type="submit"
                        onClick={addExercise}
                        id="submit"
                    >Add</button> to the workout log</label>
                </fieldset>
                </form>
            </article>
        </>
    );
}

export default AddExercisePage;