import AddEditNote from "./AddEditNote";
import NotesList from "./NotesList";
import classes from './NotesContainer.module.css';

function NotesContainer() {


    return <article className={classes.container}>
        <AddEditNote editMode={false} />
        <NotesList />
    </article>
}

export default NotesContainer;