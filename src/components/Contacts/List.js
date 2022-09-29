import React from 'react'
import {contactSelectors} from '../../redux/contactSlice'
import { useSelector } from 'react-redux'
import Item from './Item';
function List() {
    const contacts = useSelector(contactSelectors.selectEntities);
  return (
    <div>
        {
            contacts.map(contact => (<Item key={contact.id} item={contact}/>))
        }
    </div>
  )
}

export default List