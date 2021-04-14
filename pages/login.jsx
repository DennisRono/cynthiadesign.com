import React from 'react'
import styles from '../styles/login.module.css'

export const login = () => {
    return (
        <div className={styles.login}>
           <div className={styles.logincontainer}>
                <div className={styles.loginbox}>
                    <h3>login</h3>
                    <div className={styles.signin}>
                        <input type="text" placeholder="Username"/>
                        <input type="password" placeholder="password"/>
                        <input type="submit" value="login"/>
                    </div>
                </div>
           </div>
        </div>
    )
}

export default login