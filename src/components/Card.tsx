import styles from "./Card.module.css";
import React, { useState } from "react";

export function Card (props: CardProps) {

    console.log(props.description.length)

    const [expanded, setExpanded] = useState(false);

    const toggleExpanded = (event: React.MouseEvent<HTMLAnchorElement>) => {
        event.preventDefault();
        setExpanded(!expanded);
    }

    return (
        <div className = {styles.cardContainer}>
            <div className = {styles.internalHeader}>
                <img className = {styles.companyPic } src = {props.companyPic} alt = "Company Picture"/>
                <div className = {styles.titleContainer }>
                    <h2 className = {styles.title }> {props.title} </h2>   
                    <h3 className = {styles.title2 }> {props.title2} </h3>   
                </div>
            </div>
            <div className = {styles.textSection}>
                <p className = {expanded? styles.description : styles.limiteLinhas}>{props.description}</p>
                {!expanded && (<a href = "#" onClick = {toggleExpanded}>
                    Ler Mais
                </a>)}
                <span className = {styles.date}>{props.date}</span>    
            </div>
        </div>
    )
}

interface CardProps {
    companyPic: string;
    title: string;
    title2: string;
    date: string;
    description: string;
}
