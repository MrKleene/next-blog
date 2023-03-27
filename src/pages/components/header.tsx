import styles from "@/styles/home.module.css"
import { useState } from "react"
const header = () =>{

    const [navIndex,setNavIndex] = useState(0)
    const [focusActive,setFocusActive] = useState(false)
    
    const navList = ['文章','合集']
    const changeNav = (e:number) =>{
        setNavIndex(e)
    }

    return (
        <div className={styles.header}>
            <div>
                <div className={styles.nav}>
                    {
                        navList.map((item,index)=>{
                            return <a href="/#" 
                                        key={item}
                                        className={navIndex==index ? styles.nav_active : ''}
                                        onClick={()=>changeNav(index)}
                                    >{item}</a>
                        })
                    }
                </div>
                <div className={[styles.search,focusActive ? styles.search_focus : ''].join(' ')}>
                    <input type="text" placeholder="搜索文章" onFocus={()=>setFocusActive(true)} onBlur={()=>setFocusActive(false)} />
                    <div></div>
                </div>
            </div>
        </div>
    )
}
export default header