import styles from '../app/page.module.css'

export default function Nav( { items, className, onItemClick, activeItem, type } ) {
    return (
        <ul className={className}>
            {items.map(item => (
                <li 
                    key={item} 
                    onClick={() => onItemClick?.(item)}
                    className={`${styles.navItem} ${
                        activeItem === item 
                            ? type === "status"
                                ? styles.activeStatus
                                : styles.activeGenre 
                            : ""
                    }`}
                >
                    {item}
                </li>
            ))}
        </ul>
    )
}