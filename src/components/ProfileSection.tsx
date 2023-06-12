import profilePic from "../assets/prof_pic_1.jpg";
import { Typewriter } from 'react-simple-typewriter'
import styles from './ProfileSection.module.css';

export function ProfileSection () {

    return (
        <section className = { styles.profileSection } >

            <div className = { styles.staticContainer }>
                <div className = { styles.picContainer }>
                    <img className = { styles.picture } src = { profilePic } alt = "Foto de Perfil" />
                </div>
                <div className = { styles.textSection }>
                    <h1 className = { styles.title } >Gabriel Ramires</h1>
                    <p className = { styles.paragraph }>
                        <Typewriter
                            words={['Desenvolvedor de Software', 'Estudante de Ciência da Computação', 'Desenvolvedor Web Fullstack']}
                            loop={0}
                            cursor
                            cursorStyle='|'
                            typeSpeed={70}
                            deleteSpeed={50}
                            delaySpeed={1000}
                        />
                    </p>
                </div>                
            </div>
        </section>
    )
}
