import styles from "@/styles/home.module.css"
const sidebarLeft = () =>{
    return (
        <div className={styles.sidebarRight}>
            <div>
                <div>
                    <img src="https://p3-passport.byteimg.com/img/user-avatar/83f703d5db2883dbc42d9c03f38a5c8d~100x100.awebp" alt="头像" />
                </div>
                <div>
                    <div style={{fontSize:'16px',color:'#252933',marginBottom:'4px',lineHeight:"24px"}}>Kleene</div>
                    <div>一个爱写代码的小菜鸡</div>
                </div>
            </div>
            <div>
                <div>文章数    1744</div>
                <div>累计获赞    1744</div>
                <div>文章被阅读    111481</div>
            </div>
            
        </div>
    )
}
export default sidebarLeft