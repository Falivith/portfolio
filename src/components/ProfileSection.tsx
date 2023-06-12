import profilePic from "../assets/prof_pic_1.jpg";
import styles from './ProfileSection.module.css';

export function ProfileSection () {
    return (
        <section className = { styles.profileSection } >
            <div className = { styles.picContainer }>
                <img className = { styles.picture } src = { profilePic } alt = "Foto de Perfil" />
            </div>
            <div className = { styles.textSection }>
                <h1 className = { styles.title } >Olá, me chamo Gabriel Ramires!</h1>
                <p className = { styles.paragraph } >Software Developer</p>
            </div>
        </section>
    )
}
