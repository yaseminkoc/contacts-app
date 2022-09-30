
import React from 'react'
import {useDispatch} from 'react-redux'
import {deleteContact} from '../../redux/contactSlice'
import { Link } from 'react-router-dom';
function Item({item}) {
    const dispatch = useDispatch();
    const handleDelete = (id) => {
      if(window.confirm('Are you sure you want to delete this contact?')){
        dispatch(deleteContact(id));
      }
    };
  return <li>
    <span>{item.name}</span>
    <span>{item.phone_number}</span>
    <div className='edit'>
    <span><Link to={`/edit/${item.id}`}>Edit</Link></span>
    <span className='deleteBtn' onClick={()=>handleDelete(item.id)} >x</span>
    </div>
  </li>
  
}

export default Item;  