import styles from "./Experience.module.css";
//import { Card } from "./Card";

/*
* 
*
*
*
*/

export function Experience () {
    return (
        <section className = { styles.experienceSection } >
            <div className = { styles.text }>
                <h2>Experiência</h2>
                <p>1 ano trabalhando como desenvolvedor web fullstack em um projeto de iniciação científica.</p>
            </div>
        </section>
    )
}
