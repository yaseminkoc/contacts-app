import React from 'react'
import { useSelector,useDispatch } from 'react-redux'
import {contactSelectors, removeAllContacts} from '../../redux/contactSlice'

import Item from './Item'
function List() {
  const dispatch=useDispatch();
  const contacts = useSelector(contactSelectors.selectAll);

  const handleDeleteAll = () => {
   if(window.confirm('Are you sure you want to delete all contacts?')){
    dispatch(removeAllContacts());
   }
  };  
  return (
    <div>
      {
        contacts.length > 0 ? (<div className='deleteAllBtn' onClick={handleDeleteAll}>Delete All</div>) : null
      }
      
    <ul className='list'>
        {
            contacts.map(contact=>(<Item key={contact.id} item={contact}/>))
        }
    </ul>
    </div>

  )
}

export default List