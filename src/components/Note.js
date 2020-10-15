import React, { useContext } from 'react';
import NotesContext from '../context/notes';
import useMousePosition from '../hooks/useMousePosition';

const Note = ({ note }) => {

    const { dispatchNotes } = useContext(NotesContext);
    const position = useMousePosition();

    const removeNote = (guid) => {
        dispatchNotes({
            type: 'REMOVE_NOTE',
            guid
        });
    };

    return (
        <div>
            <h3>{note.title}</h3>
            <p>{note.body}</p>
            <p>{position.x}, {position.y}</p>
            <button onClick={() => removeNote(note.guid)}>x</button>
        </div>
    );
};

export { Note as default };