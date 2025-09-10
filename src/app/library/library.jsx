'use client'
import Nav from "@/components/Nav"
import TopNav from "@/components/TopNav"
import styles from '../../app/page.module.css'


export default function Library() {
    const items = [
        "History",
        "Save",
        "Likes"
    ]
    return(
        <div>
            <TopNav/>
            <Nav 
                items={items}
                className={styles.libraryNav}
                onItemClick={() => {}}
                activeItem={null}
                type=""
            />
            <div className={styles.locked}>
                Please <a href="/signin">sign in</a> to view.
            </div>
        </div>
    )
}