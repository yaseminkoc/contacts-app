import { createSlice, createEntityAdapter } from "@reduxjs/toolkit";

export const contactsAdaptor= createEntityAdapter();
export const contactSelectors = contactsAdaptor.getSelectors((state) => state.contacts);

const contactSlice = createSlice({
    name:"contacts",
    initialState:contactsAdaptor.getInitialState(),
    reducers:{
        addContact: contactsAdaptor.addOne,
        addContacts: contactsAdaptor.addMany,
    },
    extraReducers:{}
})

export const {addContact, addContacts} = contactSlice.actions;
export default contactSlice.reducer;