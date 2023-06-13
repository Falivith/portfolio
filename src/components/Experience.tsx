import styles from "./Experience.module.css";
import { Card } from "./Card";
import Hut8 from "../assets/HUT8.svg";

export function Experience () {

    const experiences = [
        {
            companyPic: Hut8,
            title: "Monitor Voluntário (Lógica para Computação)",
            date: "01/2022 à 06/2022",
            description: "As a mentor to students on the Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut error harum, quos excepturi officia velit eaque. Repellendus harum et nemo animi. Repellat, ducimus? Voluptatibus eligendi similique ullam quaerat ducimus excepturi!"
        },
        {
            title: "Monitor (Programação de Computadores)",
            date: "01/2022 à 06/2022",
            description: "As a mentor to students on the Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut error harum, quos excepturi officia velit eaque. Repellendus harum et nemo animi. Repellat, ducimus? Voluptatibus eligendi similique ullam quaerat ducimus excepturi!"
        },
        {
            title: "Desenvolvedor Web FullStack (Pesquisa)",
            date: "01/2022 à 06/2022",
            description: "As a mentor to students on the Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut error harum, quos excepturi officia velit eaque. Repellendus harum et nemo animi. Repellat, ducimus? Voluptatibus eligendi similique ullam quaerat ducimus excepturi!"
        }
    ]

    return (
        <section className = { styles.experienceSection }>
            <h2>Experiência</h2>
            <div className = { styles.cardsContainer }>
                {experiences.map((experience, index) => {
                    return <Card
                        key = {index}
                        companyPic = {Hut8}
                        title = {experience.title}
                        date = {experience.date}
                        description = {experience.description}
                />})}
            </div>
        </section>
    )
}
