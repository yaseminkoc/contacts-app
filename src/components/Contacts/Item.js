import React from 'react'

function Item({item}) {
  return (
    <li>
        <span>{item.name}</span>
        <span>{item.phone_number}</span>
    </li>
  )
}

export default Item