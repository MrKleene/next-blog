
import styles from "@/styles/home.module.css"
import Header from '../components/header'
import SidebarLeft from './sidebarLeft'
import SidebarRight from './sidebarRight'
import Article from './article'
const home = () =>{
    return (
        <div>
            <Header />
            <div className={styles.home_content}>
                <SidebarLeft />
                <Article />
                <SidebarRight />
            </div>
        </div>
    )
}
export default home