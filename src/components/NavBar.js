import classes from './NavBar.module.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGripLines, faSearch, faStickyNote, faThLarge, faTimes } from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react';


function NavBar() {
    const [layout, setLayout] = useState('list');

    const onLayoutChange = () => {
        setLayout(prevLayout => prevLayout === 'list' ? 'grid' : 'list');
    }

    return <nav className={classes.navbar}>
        <span className={classes['navbar-brand']}>
            <FontAwesomeIcon icon={faStickyNote} style={{ color: "#f0de19", height: '2rem', margin: '0rem 1rem' }} />
            <h1>Keep</h1></span>
        <form className={classes['navbar-search']}>
            <span><FontAwesomeIcon icon={faSearch} className='' /></span>
            <input type="text" className={classes['navbar-search-input']} placeholder='Search' />
            <span> <FontAwesomeIcon icon={faTimes} /></span>
        </form>
        <span>

            <FontAwesomeIcon className={classes['navbar-search-icon']} icon={layout === 'list' ? faThLarge : faGripLines} onClick={onLayoutChange} />



        </span>
    </nav>
}

export default NavBar;