import TopNav from '../../components/TopNav'
import styles from '../../app/page.module.css'

export const metadata = {
  title: "Sign up - Animeness",
  description: "Read your favourite manga, webtoon, manhwa, manhua on animeness!",
};

export default function Signup() {
    return (
        <div>
            <TopNav/>
            <div className={styles.locked}>
                Page Under Construction
            </div>
        </div>
    )
}