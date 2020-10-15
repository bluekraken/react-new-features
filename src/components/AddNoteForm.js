import React, { useContext, useState } from 'react';
import NotesContext from '../context/notes';

const AddNoteForm = () => {

    const { dispatchNotes } = useContext(NotesContext);
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');

    const addNote = (e) => {
        e.preventDefault();
        dispatchNotes({
            type: 'ADD_NOTE',
            title,
            body
        });
        setTitle('');
        setBody('');
    };

    return (
        <form onSubmit={addNote}>
            <input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
            />
            <textarea
                value={body}
                onChange={(e) => setBody(e.target.value)}
            >
            </textarea>
            <button>Add note</button>
        </form>
    );
};

export { AddNoteForm as default };