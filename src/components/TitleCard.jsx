import styles from '../app/page.module.css'
import Link from 'next/link'

export default function TitleCard({ slug, title, cover_image }) {
    return(
        <div className={styles.titleCard} >
            <Link href={`/manga/${slug}`}>
                <img src={cover_image} alt={title} className={styles.titleCardImg}/>
                <p className={styles.cardTitle}>{title}</p>
            </Link>
        </div>
    )
}