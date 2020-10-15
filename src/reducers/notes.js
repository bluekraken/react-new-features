import { v4 as uuidv4 } from 'uuid';

const notesReducer = (state, action) => {
    switch (action.type) {

        case 'ADD_NOTE':
            return [
                ...state,
                {
                guid: uuidv4(),
                title: action.title,
                body: action.body
                }
            ];

        case 'LOAD_NOTES':
            return action.notes;

        case 'REMOVE_NOTE':
            return state.filter((note) => note.guid !== action.guid);

        default:
            return state;
    }
}

export { notesReducer as default };