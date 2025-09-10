import styles from '../app/page.module.css'
import TitleCard from "./TitleCard"

export default function Catalog( { titles, className }) {

    return (
        <div className={`${styles.catalog} ${className || ""}`}>
            {titles.map((t) => (
                <TitleCard
                    key={t.id}
                    title={t.title}
                    cover_image={t.cover_image}
                    slug={t.slug}
                />
            ))}
        </div>
    )
}