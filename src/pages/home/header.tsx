import styles from "@/styles/home.module.css"
const header = () =>{
    return (
        <div className={styles.header}>
            <div>
                <div className={styles.nav}>
                    <a href="/#" className={styles.nav_active}>文章</a>
                    <a href="/#">标签</a>
                    <a href="/#">分类</a>
                </div>
                <div className={styles.search}>
                    <input type="text" placeholder="搜索文章" />
                    <div></div>
                </div>
            </div>
        </div>
    )
}
export default header