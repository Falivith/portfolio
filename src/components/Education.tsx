import styles from "./Experience.module.css";

export function Education () {
    return (
        <section className = { styles.experienceSection } >
            <div className = { styles.text }>
                <h2>Formação</h2>
                <p>Atualmente, estudo Ciência da Computação pela 
                    Universidade Federal de Pelotas &#40;UFPEL&#41;
                    , ingressei em 2020/2, e a cada semestre, me 
                    encanto mais e mais com esse mundo da tecnologia. 
                </p>
            </div>
        </section>
    );
}
