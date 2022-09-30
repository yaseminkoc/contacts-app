import { createSlice, createEntityAdapter } from "@reduxjs/toolkit";

export const contactsAdaptor= createEntityAdapter();
export const contactSelectors = contactsAdaptor.getSelectors((state) => state.contacts);

const contactSlice = createSlice({
    name:"contacts",
    initialState:contactsAdaptor.getInitialState(),
    reducers:{
        addContact: contactsAdaptor.addOne,
        addContacts: contactsAdaptor.addMany,
        deleteContact: contactsAdaptor.removeOne,
        removeAllContacts: contactsAdaptor.removeAll,
        updateContact: contactsAdaptor.updateOne,
    },
    extraReducers:{}
})

export const {addContact, addContacts, deleteContact, removeAllContacts, updateContact} = contactSlice.actions;
export default contactSlice.reducer;