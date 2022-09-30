import {useState} from 'react'
import { useDispatch } from 'react-redux';
import { addContact } from '../../redux/contactSlice';
import { nanoid } from '@reduxjs/toolkit';

function Form() {
    const dispatch = useDispatch();
    const [name, setName] = useState("");
    const [number, setNumber] = useState("");
    const handleSubmit = (e) =>{
        e.preventDefault();
        if(!name || !number){return false}
      //  const names = name.split(',');
      // const data = names.map((name) => ({id:nanoid(), name}));
        dispatch(addContact({id:nanoid(), name, phone_number:number}));
        setName("");
        setNumber("");
   }
  return (
    <div><Form onSubmit = {handleSubmit}>
        <input placeholder='name' value = {name} onChange={(e) => (setName(e.target.value))}/>
        <input placeholder='phone number' value = {number} onChange={(e) => (setNumber(e.target.value))}/>
        <div className='btn'><button type='submit'>Add</button></div>     
    </Form></div>
  )
}

export default Form