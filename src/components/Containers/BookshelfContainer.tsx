import { BookCard } from "../Cards/BookCard"
import styles from "./Bookshelf.module.css";

export const BookshelfContainer = () => {
    let bookArr = [""]
    return (
        <div className={styles["bookshelf-container"]}>
            {bookArr.map((book) => {
                return <BookCard />
            })}
        </div>
    )
}