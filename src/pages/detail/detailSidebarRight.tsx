import styles from "@/styles/home.module.css"
const detailSidebarRight = () =>{

    const jumpDetail = (e:string) =>{
        window.open(window.location.origin+'/detail/'+e)
    }

    return (
        <div className={styles.detail_sidebarRight}>
            <div className={styles.detail_sidebarRight_title}>相关文章</div>
            <div className={styles.detail_sidebarRight_relate}>
                {
                    [0,1,2,3,4].map((item,index)=>{
                        return <div key={item} onClick={()=>jumpDetail('47545')} className={styles.relate}>
                                    <a href="/#" onClick={(e)=>e.preventDefault()}>我用NEXTJS来写个人博客</a>
                                    <div>10点赞 · 2评论</div>
                                </div>
                    })
                }
            </div>
        </div>
    )
}
export default detailSidebarRight