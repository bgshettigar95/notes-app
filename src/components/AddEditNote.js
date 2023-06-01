import { faBell, faBoxArchive, faEllipsisVertical, faImage, faPalette, faPlus, faTasks, faThumbtack } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classes from './AddEditNote.module.css';
import { useRef, useState } from "react";

function AddEditNote(props) {

    const [editMode, setEditMode] = useState(props.editMode);
    const [showControls, setShowControls] = useState(props.editMode ? true : false);
    const [showTicks, setShowTicks] = useState(false);
    const [listItems, setListItems] = useState([]);

    const listInput = useRef();
    const noteInput = useRef();
    const titleInput = useRef();

    const onFocus = () => {
        if (!editMode && !showControls) {
            setShowControls(true);
        }
    }

    const onCancel = (e) => {
        console.log(e);
        e.preventDefault();
        if (!editMode) {
            setShowControls(false);
        }
    }

    const onSubmit = (e) => {
        console.log(e);
        e.preventDefault();
        if (!editMode) {
            setShowControls(false);
        }
    }

    const addListItem = (e) => {

        if (e.type === 'blur' || (e.type === 'keydown' && e.key === 'Enter')) {
            if (listInput.current.value) {
                let currentVal = {
                    val: listInput.current.value,
                    completed: false,
                    id: listItems.length + 1
                }
                listInput.current.value = '';
                setListItems(prevState => {
                    return [...prevState, currentVal]
                });
            }
        }

    }

    const onListItemStatusChange = (e, id) => {
        setListItems(prevState => {
            let currentItem = prevState.find(item => item.id === id);
            console.log(id, prevState, currentItem);
            currentItem.completed = e.target.checked;
            return [...prevState];
        });
    }

    const listItemsElements = listItems.map((item, i) => {
        return <div key={item.id}>
            <input type="checkbox" id={i} checked={item.completed} onChange={(e) => onListItemStatusChange(e, item.id)} />
            <label> {item.val}</label>
        </div>;
    });



    return <form className={classes.container}>
        <div className={`${classes['form-field-container']} ${!showControls ? classes['hide-controls'] : ''}`}>
            <input type="text" aria-label="title" placeholder="Title" className={classes['form-field']} ref={titleInput} />
            <FontAwesomeIcon icon={faThumbtack} className={classes['config-options-items']} />
        </div>

        <div className={classes['form-field-container']}>
            <textarea aria-label="note" placeholder="Take a note..." className={`${classes['form-field']} ${!showControls ? classes['form-field-note-initial'] : ''}`}
                style={{ height: '2rem' }} onFocus={onFocus} ref={noteInput}></textarea>
            {!showControls ? <span>
                <FontAwesomeIcon icon={faTasks} className={classes['config-options-items']} onClick={onFocus} />
                <FontAwesomeIcon icon={faImage} className={classes['config-options-items']} onClick={onFocus} />
            </span> : ''}
        </div>
        {showControls ? <div className="w-100 ml-1 ">
            <div className={classes.listItems}>
                {listItemsElements}
            </div>
            <div className={classes['form-field-container']}>
                <FontAwesomeIcon icon={faPlus} className={classes['listItem']} />
                <input type="text" placeholder="List item" className={classes['form-field']} ref={listInput} onBlur={(e) => addListItem(e)} onKeyDown={(e) => addListItem(e)} />
            </div>
        </div> : ''}

        <section className={`${classes.config} ${!showControls ? classes['hide-controls'] : ''}`}>
            <section className={classes['config-options']}>
                <FontAwesomeIcon icon={faBell} className={classes['config-options-items']} />
                <FontAwesomeIcon icon={faPalette} className={classes['config-options-items']} />
                <FontAwesomeIcon icon={faImage} className={classes['config-options-items']} />
                <FontAwesomeIcon icon={faBoxArchive} className={classes['config-options-items']} />
                <FontAwesomeIcon icon={faEllipsisVertical} className={classes['config-options-items']} />
            </section>
            <section className={classes['bts-container']}>
                <button type="button" className={classes['submit-btn']} onClick={onCancel}>Cancel</button>
                <button type="button" className={classes['submit-btn']} onClick={onSubmit}>Save</button>
            </section>
        </section>
    </form>
}

export default AddEditNote;