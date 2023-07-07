import styles from "./Experience.module.css";
import { Card } from "./Card";

export function Education () {

    const formacoes = [
        {
            institutionPic: "",
            title: "Ciência da Computação - Bacharelado",
            title2:  "UFPEL - Universidade Federal de Pelotas",
            date: "06/2020 até o momento",
            description: "Criação de Landing Pages a partir do Figma utilizando ReactJS, documentação e mantimento de projetos, frequentar e apresentar reuniões."
        },
        {
            institutionPic: "",
            title: "Ensino Médio",
            title2:  "E.E.E.M Pedro Rosa - Tabaí, RS",
            date: "2017 - 2019",
            description: "Criação de Landing Pages a partir do Figma utilizando ReactJS, documentação e mantimento de projetos, frequentar e apresentar reuniões."
        },
    ]

    return (
        <section className = { styles.experienceSection }>
            <h2>Formação</h2>
            <div className = { styles.cardsContainer }>
                {formacoes.map((experience, index) => {
                    return <Card
                        key = {index}
                        companyPic = {experience.institutionPic}
                        title = {experience.title}
                        title2 = {experience.title2}
                        date = {experience.date}
                        description = {experience.description}
                />})}
            </div>
        </section>
    );
}
