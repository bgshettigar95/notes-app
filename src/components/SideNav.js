import classes from './SideNav.module.css'
import { faBell, faBoxArchive, faLightbulb, faPen, faTag, faTrashCan } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from 'react';

function SideNav() {
    const [show, setShow] = useState(false);
    const onMouseOver = () => {
        setShow(true);
    }

    const onMouseLeave = () => {
        setShow(false);
    }
    return <nav>
        <ul className={`${classes['side-nav-list']} ${show ? classes['side-nav-list-hover'] : ''}`} onMouseOver={onMouseOver} onMouseLeave={onMouseLeave}>
            <li className={classes['side-nav-list-item']}  >
                <FontAwesomeIcon icon={faLightbulb} />
                {show ? <span>Notes</span> : ''}
            </li>
            <li className={classes['side-nav-list-item']}>
                <FontAwesomeIcon icon={faBell} />
                {show ? <span>Reminders</span> : ''}
            </li>
            <li className={classes['side-nav-list-item']}>
                <FontAwesomeIcon icon={faTag} />
                {show ? <span>Labels</span> : ''}
            </li>
            <li className={classes['side-nav-list-item']}>
                <FontAwesomeIcon icon={faPen} />
                {show ? <span>Edit Labels</span> : ''}
            </li>
            <li className={classes['side-nav-list-item']}>
                <FontAwesomeIcon icon={faBoxArchive} />
                {show ? <span>Archive</span> : ''}
            </li>
            <li className={classes['side-nav-list-item']}>
                <FontAwesomeIcon icon={faTrashCan} />
                {show ? <span>Bin</span> : ''}
            </li>
        </ul>
    </nav>
}

export default SideNav;