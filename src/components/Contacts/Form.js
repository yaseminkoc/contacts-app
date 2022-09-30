import {useState} from 'react'
import {useDispatch} from 'react-redux'
import { addContact } from '../../redux/contactSlice';
import { nanoid } from '@reduxjs/toolkit';

function Form() {
    const [name,setName]=useState('');
    const [number,setNumber]=useState('');

    const dispatch=useDispatch();
    const handleSubmit=(e)=>{
        e.preventDefault();

        if (!name || !number) return false;

        // const names = name.split(',');
        
        // const data = names.map((name) => ({ id: nanoid(), name,phone_number:number }));
            dispatch(addContact({id:nanoid(),name,phone_number:number}));


     setName('');
     setNumber("");
    };
  return (
    <div>
        <form onSubmit={handleSubmit} >
            <input placeholder='name' value={name} onChange={(e)=> setName(e.target.value)} />
            <input placeholder='phone' value={number} onChange={(e)=>setNumber(e.target.value)} />
            <div className='btn'>
                <button type='submit'>Add</button>
            </div>
          
        </form>
    </div>
  )
}

export default Form