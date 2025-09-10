import { BookmarkSimpleIcon, ShareIcon } from "@phosphor-icons/react/dist/ssr"
import styles from '../app/page.module.css'


export default function TitlePgCTA() {
    return (
        <div className={styles.cta}>
            <button className={styles.button}>Start Reading</button>
            <button className={styles.button}><BookmarkSimpleIcon/>Save</button>
            <button className={styles.button}><ShareIcon/>Share</button>
        </div>
    )
}