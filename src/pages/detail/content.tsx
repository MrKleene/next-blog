import { useRouter } from "next/router"
import { useEffect, useState } from "react"
import styles from "@/styles/home.module.css"

const detail = () =>{
    const [articleDom,setArticleDom] = useState('')


    const router = useRouter()
    const { article_id } :any = router.query
    

    if(article_id){
        fetch('/api/article_content?article_id='+article_id).then(response=>response.json())
        .then(res=>{
            console.log(res)
            setArticleDom(res.data.md)
        })
        .catch(err=>{
            console.log(err)
        })
    }

    return (
        <div className={styles.article_content}>
            <div className={styles.markdown_body} dangerouslySetInnerHTML = {{__html:articleDom}} ></div>
        </div>
    )
}
export default detail