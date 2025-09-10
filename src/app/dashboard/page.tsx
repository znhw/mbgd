import TopNav from "@/components/TopNav";
import styles from '../../app/page.module.css'


export const metadata = {
  title: "Dashboard - Animeness",
  description: "Read your favourite manga, webtoon, manhwa, manhua on animeness!",
};

export default function Account() {
    return (
        <div>
            <TopNav/>
            <div className={styles.locked}>
                Please <a href="/signin">sign in</a> to view.
            </div>
        </div>
    )
}