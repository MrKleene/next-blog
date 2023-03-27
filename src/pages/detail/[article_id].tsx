import styles from "@/styles/home.module.css"
import Header from '../components/header'
import Content from './content'
import DetailSidebarLeft from "./detailSidebarLeft"
import DetailSidebarRight from "./detailSidebarRight"

const home = () =>{
    return (
        <div>
            <Header />
            <div className={styles.article_defailt}>
                {/* <DetailSidebarLeft /> */}
                <Content />
                <DetailSidebarRight />
            </div>
        </div>
    )
}
export default home