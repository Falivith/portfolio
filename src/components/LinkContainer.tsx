import styles from './LinkContainer.module.css';

import { AiFillLinkedin } from 'react-icons/ai';
import { AiFillFacebook } from 'react-icons/ai';
import { AiFillInstagram } from 'react-icons/ai';
import { AiFillGithub } from 'react-icons/ai';

export function LinkContainer () {

    const size = 5;

    return (
        <div className = { styles.container }>
            <a href = "https://www.linkedin.com/in/gabriel-ramires-42a8a61a0/" target = "_blank">
                <AiFillLinkedin style = {{ fontSize: size + 'rem' }} 
                className = { styles.icon }/>
            </a>
            <a href = "https://github.com/Falivith" target = "_blank">
                <AiFillGithub style = {{ fontSize: size + 'rem' }} 
                className = { styles.icon }/>
            </a>
            <a href = "https://www.facebook.com/Falivith/" target = "_blank">
                <AiFillFacebook style = {{ fontSize: size + 'rem' }} 
                className = { styles.icon }/>
            </a>
            <a href = "https://www.instagram.com/gabriel_falivith/" target = "_blank">
                <AiFillInstagram style = {{ fontSize: size + 'rem' }} 
                className = { styles.icon }/>
            </a>
        </div>
    )
}
