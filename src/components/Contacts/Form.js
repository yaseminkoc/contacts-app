import {useState} from 'react'
import { useDispatch } from 'react-redux';
import { addContact, addContacts } from '../../redux/contactSlice';
import { nanoid } from '@reduxjs/toolkit';

function Form() {
    const dispatch = useDispatch();
    const [name, setName] = useState(" ");
    const handleSubmit = (e) =>{
        e.preventDefault();
        if(!name){return false}
        const names = name.split(',');
        const data = names.map((name) => ({id:nanoid(), name}));
        dispatch(addContacts(data));
        setName("");
   }
  return (
    <div><Form onSubmit = {handleSubmit}>
        <input placeholder='name' value = {name} onChange={(e) => (setName(e.target.value))}/>
        
        </Form></div>
  )
}

export default Form