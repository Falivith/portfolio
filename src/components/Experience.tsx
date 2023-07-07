import styles from "./Experience.module.css";
import { Card } from "./Card";
import Hut8 from "../assets/HUT8.svg";
import Ufpel from "../assets/UFPEL.png";
import Fapergs from "../assets/Fapergs.png";
import CNPQ from "../assets/CNPQ.png";

export function Experience () {

    const experiences = [
        {
            companyPic: Hut8,
            title: "Desenvolvedor Trainee",
            title2:  "Hut8 - Empresa Júnior de Computação",
            date: "07/2023 até o momento",
            description: "Criação de Landing Pages a partir do Figma utilizando ReactJS, documentação e mantimento de projetos, frequentar e apresentar reuniões."
        },
        {
            companyPic: Hut8,
            title: "Pesquisador em IA",
            title2:  "Hub de Inovação em Inteligência Artificial",
            date: "06/2023 até o momento",
            description: "Análise de dados e desenvolvimento de modelos de aprendizado de máquina utilizando Python, Sci-kit Learn, Seaborn, Pandas, e outras tecnologias."
        },
        {
            companyPic: CNPQ,
            title: "Pesquisador Assistente",
            title2:  "CNPQ - Computação Quântica e Lógica Multivalorada",
            date: "02/2023 até o momento",
            description: "Revisão da bibliografia sobre conceitos de Lógica Fuzzy e Computação Quântica, revisão e produção de artigos científicos na área, atividades com simuladores quânticos (Biblioteca Qiskit, Liquid, IBM Quantum), apresentação de Workshops, Python para geração das simulações e análise de dados."
        },
        {
            companyPic: Fapergs,
            title: "Desenvolvedor Web (Bolsista)",
            title2:  "FAPERGS - Projeto de Ensino e Extensão",
            date: "07/2022 à 06/2023",
            description: "Desenvolvimento completo de uma aplicação voltada a educação, desde a interface da aplicação utilizando React, JS, CSS, etc até a API com Node.js, disponibilizando serviços úteis para consulta dos dados da aplicação.Todo o desenvolvimento está sendo realizado em equipe com mais 3 integrantes, incluindo designers e desenvolvedores, utilizando Trello para a organização de tarefas."
        },
        {
            companyPic: Ufpel,
            title: "Monitor (Bolsista)",
            title2:  "UFPEL - Programação de Computadores",
            date: "01/2022 à 06/2022",
            description: "Monitoria na Disciplina de Programação de Computadores. Envolve o ensino de programação de computadores, com foco na linguagem C e suas estruturas básicas. Além disso, inclui a produção de material didático relacionado ao curso, a resposta às questões dos alunos e a revisão dos códigos dos alunos, ajudando-os a resolver bugs."
        },
        {
            companyPic: Ufpel,
            title: "Monitor (Voluntário)",
            title2:  "UFPEL - Lógica para Computação",
            date: "06/2021 à 11/2021",
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
