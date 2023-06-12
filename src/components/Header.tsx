import styles from "./Header.module.css";

export function Header () {
    return (
        <header className = { styles.container }>
            <a href="">Informações Pessoais</a>
            <a href="">Projetos</a>
            <a href="">Contato</a>
            <a href="">Por que essa paleta de cores marrom?</a>
        </header>
    )
}
