import styles from "@/styles/home.module.css"
const sidebarLeft = () =>{
    return (
        <div className={styles.sidebarLeft}>
            <a href="/#" className={styles.sidebarLeft_active}>文章</a>
            <a href="/#">文章</a>
            <a href="/#">文章</a>
            <a href="/#">文章</a>
            <a href="/#">文章</a>
            <a href="/#">文章</a>
        </div>
    )
}
export default sidebarLeft