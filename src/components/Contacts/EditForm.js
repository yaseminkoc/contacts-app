import React from 'react'
import { updateContact } from '../../redux/contactSlice';
import { useDispatch } from 'react-redux';

function EditForm({ contact }) {
    const dispatch = useDispatch();
    const [name, setName] = React.useState(contact.name);
    const [number, setNumber] = React.useState(contact.phone_number);
    const handleSubmit = (e) => {
        e.preventDefault();
        if (name && number) {
            dispatch(updateContact({ id: contact.id, name: name, phone_number: number }));
            console.log("güncellendi");

        }
        else alert('Please fill the form');

    }

    return (
        <div>
            <form onSubmit={handleSubmit} >
                <input placeholder='name' value={name}
                    onChange={(e) => setName(e.target.value)}
                />
                <input placeholder='phone' value={number}
                    onChange={(e) => setNumber(e.target.value)}
                />
                <div className='btn'>
                    <button type='submit'>Update</button>
                </div>

            </form>
        </div>
    )
}

export default EditForm