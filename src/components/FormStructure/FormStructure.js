import {useState} from 'react';
import ErrorModal from './ErrorModal';

function FormStructure(props){

    const[name, setName] = useState('');
    const[age, setAge] = useState('');
    const[college, setCollege] = useState('');
    const[error, setError] = useState();

    const nameChangeHandler = (event) => {
        setName(event.target.value);
    }

    const ageChangeHandler = (event) => {
        setAge(event.target.value);
    }

    const collegeChangeHandler = (event) => {
        setCollege(event.target.value);
    }

    const addDetailHandler = (event) => {
        event.preventDefault();

        if(name.trim().length === 0 || age.trim().length === 0 || college.trim().length === 0){
            setError({
                title: 'Invalid Input',
                message: 'Please enter a valid name and age (non-empty values)' 
            })
            return;
        }

        if(age<0){
            setError({
                title: 'Invalid Input',
                message: 'Please enter a valid age'  
            })
            return;
        }

        props.addUserDetails(name, age, college);
    }

    const errorHandler = () => {
        setError(null);
    }

    return (
        <div>
        <form onSubmit={addDetailHandler}>
            <label>Username</label>
            <input type="text" value={name} onChange={nameChangeHandler} disabled={error}></input>
            <label>Age</label>
            <input type="number" value={age} onChange={ageChangeHandler} disabled={error}></input>
            <label>CollegeName</label>
            <input type="text" value={college} onChange={collegeChangeHandler} disabled={error}></input>
            <button type="submit">Add Details</button>
        </form>
        {error && <ErrorModal title={error.title} message={error.message} onConfirm={errorHandler}></ErrorModal>}
        </div>
    )
}
export default FormStructure;