import { HouseIcon } from "@phosphor-icons/react/dist/ssr"
import styles from '../app/page.module.css'
import Link from "next/link"

export default function TitleNav() {
    return(
        <div className={styles.titleNav}>
            <Link href="/"> 
                <HouseIcon size={30}/>
            </Link>
        </div>
    )
}