import { ProfileSection } from "./ProfileSection"
import { Experience } from "./Experience";
import { LinkContainer } from "./LinkContainer";
import { Education } from "./Education";
import styles from "./CenterContainer.module.css";

export function CenterContainer () {
    return (
        <div className = { styles.mainSection }>
            <ProfileSection/>
            <Experience/>
            <Education/>
            <LinkContainer/>
        </div>
    )
}
