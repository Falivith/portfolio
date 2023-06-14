import styles from "./Experience.module.css";
import { Card } from "./Card";
import Hut8 from "../assets/HUT8.svg";
import Ufpel from "../assets/UFPEL.png";
import Fapergs from "../assets/Fapergs.png";

export function Experience () {

    const experiences = [
        {
            companyPic: Hut8,
            title: "Monitor Voluntário",
            title2:  "(Lógica para Computação)",
            date: "01/2022 à 06/2022",
            description: "As a mentor to students on the Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut error harum, quos excepturi officia velit eaque. Repellendus harum et nemo animi. Repellat, ducimus? Voluptatibus eligendi similique ullam quaerat ducimus excepturi!"
        },
        {
            companyPic: Ufpel,
            title: "Monitor",
            title2:  "(Programação de Computadores)",
            date: "01/2022 à 06/2022",
            description: "As a mentor to students on the Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut error harum, quos excepturi officia velit eaque. Repellendus harum et nemo animi. Repellat, ducimus? Voluptatibus eligendi similique ullam quaerat ducimus excepturi!"
        },
        {
            companyPic: Fapergs,
            title: "Desenvolvedor Web FullStack (Bolsista)",
            title2:  "Projeto de Ensino e Extensão",
            date: "01/2022 à 06/2022",
            description: "Desenvolvimento de uma extensão de navegador responsável por coletar, processar e armazenar dados, utilizando HTML, CSS e JavaScript. A extensão trabalha com requisições para APIs externas e web scraping. Além disso, a construção da interface da aplicação é feita utilizando React, JS, CSS com módulos, SCSS e outras tecnologias, integrando-a com a API desenvolvida. A API é construída utilizando Node, Express, Sequelize, Multer, Insomnia, REST e outras tecnologias, disponibilizando serviços úteis para consulta dos dados da aplicação. Também é realizado o modelagem do banco de dados relacional da aplicação, implementado com PostgreSQL e integrado com a API desenvolvida. O trabalho envolve o uso do banco de dados PostgreSQL, além de sistemas de registro e login de usuários com oAuth 2.0. Todo o desenvolvimento é realizado em equipe com mais 3 integrantes, incluindo designers e desenvolvedores, utilizando Trello para a organização de tarefas."
        },
        {
            companyPic: Ufpel,
            title: "Monitor (Bolsista)",
            title2:  "Programação de Computadores",
            date: "06/2022 à 12/2022",
            description: "Monitoria na Disciplina de Programação de Computadores. Envolve o ensino de programação de computadores, com foco na linguagem C e suas estruturas básicas. Além disso, inclui a produção de material didático relacionado ao curso, a resposta às questões dos alunos e a revisão dos códigos dos alunos, ajudando-os a resolver bugs."
        },
        {
            companyPic: Ufpel,
            title: "Monitor Voluntário",
            title2:  "Lógica de Programação",
            date: "01/2022 à 06/2022",
            description: "Funções: Ensinar conceitos de lógica para alunos, como lógica booleana, tabelas verdade, árvores de refutação, etc. Produzir material didático relacionado à disciplina, responder às questões dos alunos e revisar exercícios dos alunos, corrigindo-os e ajudando-os na resolução."
        }
    ]

    return (
        <section className = { styles.experienceSection }>
            <h2>Experiência</h2>
            <div className = { styles.cardsContainer }>
                {experiences.map((experience, index) => {
                    return <Card
                        key = {index}
                        companyPic = {experience.companyPic}
                        title = {experience.title}
                        title2 = {experience.title2}
                        date = {experience.date}
                        description = {experience.description}
                />})}
            </div>
        </section>
    )
}
