import { PencilLine } from 'phosphor-react';

import { Avatar } from '../Avatar/Avatar';

import styles from './Sidebar.module.css';

export function Sidebar(props) {
    return (
        <aside className={styles.sidebar}>
            <img
                className={styles.cover}
                src={props.cover} 
                alt="Cover" />

            <div className={styles.profile}>
                <Avatar />
                <strong>
                    {props.name}
                </strong>
                <span>
                    {props.profission}
                </span>
            </div>

            <footer>
                <a href="#">
                    <PencilLine size={20}/>
                    Editar Perfil
                </a>
            </footer>
        </aside>
    );
}


// https://images.unsplash.com/photo-1571171637578-41bc2dd41cd2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=50