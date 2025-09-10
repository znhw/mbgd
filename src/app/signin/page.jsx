import TopNav from '../../components/TopNav'
import styles from '../../app/page.module.css'

export const metadata = {
  title: "Sign in - Animeness",
  description: "Read your favourite manga, webtoon, manhwa, manhua on animeness!",
};

export default function Sigin() {
    return (
        <div>
            <TopNav/>
            <div className={styles.locked}>
                Page Under Construction
            </div>
        </div>
    )
}