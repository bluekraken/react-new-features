import React, { useEffect, useReducer } from 'react';
import notesReducer from '../reducers/notes';
import NoteList from './NoteList';
import AddNoteForm from './AddNoteForm';
import NotesContext from '../context/notes';

const NoteApp = () => {

    const [notes, dispatchNotes] = useReducer(notesReducer, []);

    useEffect(() => {
        const notes = JSON.parse(localStorage.getItem('notes'));
        if (notes) {
            dispatchNotes({
                type: 'LOAD_NOTES',
                notes
            });
        }
    }, []);

    useEffect(() => {
        localStorage.setItem('notes', JSON.stringify(notes));
    }, [notes]);

    return (
        <NotesContext.Provider value={{ notes, dispatchNotes }}>
            <h1>Notes</h1>
            <NoteList/>
            <AddNoteForm/>
        </NotesContext.Provider>
    );
};

export { NoteApp as default };