import styles from "./Card.module.css";

export function Card (props: CardProps) {
    
    return (
        <div className = { styles.cardContainer }>
            <h2>{props.title} </h2>
            <span>{props.date}</span>
            <p>{props.description}</p>
        </div>
    )
}

interface CardProps {
    title: string;
    date: string;
    description: string;
}
