import styles from "@/styles/home.module.css"
import { useState } from "react"
const sidebarLeft = () =>{

    const [tabIndex,setTabIndex] = useState(0)

    const tabList = ['全部','前端','后端','数据库','手写题','技术点解析']

    const changeTab = (e:number) =>{
        setTabIndex(e)
    }

    return (
        <div className={styles.detail_sidebarLeft}>
            {
                tabList.map((item,index)=>{
                    return <a href="/#" 
                                className={tabIndex==index ? styles.sidebarLeft_active : ''}
                                key={index}
                                onClick={()=>changeTab(index)}
                            >{item}</a>
                })
            }
            
        </div>
    )
}
export default sidebarLeft