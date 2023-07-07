import styles from "./Card.module.css";

export function Card (props: CardProps) {
    return (
        <div className = {styles.cardContainer}>
            <div className = {styles.internalHeader}>
                <div className = {styles.companyPicContainer}>
                    <img className = {styles.companyPic } src = {props.companyPic} alt = "Company Picture"/>
                </div> 
                <div className = {styles.titleContainer }>
                    <h2 className = {styles.title }> {props.title} </h2>   
                    <h3 className = {styles.title2 }> {props.title2} </h3>   
                </div>
            </div>
            <div className = {styles.textSection}>
                <p className = {styles.description}>{props.description}</p>
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
