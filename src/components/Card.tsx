import styles from "./Card.module.css";

export function Card (props: CardProps) {
    return (
        <div className = {styles.cardContainer}>
            <div>
                <img className = {styles.companyPic } src = {props.companyPic} alt = "Company Picture"/>
                <h2 className = {styles.title }> {props.title}</h2>   
            </div>
            <span>{props.date}</span>
            <p>{props.description}</p>
        </div>
    )
}

interface CardProps {
    companyPic: string;
    title: string;
    date: string;
    description: string;
}
