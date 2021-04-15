import React from 'react'
import styles from '../styles/login.module.css'

export const register = () => {
    return (
        <div className={styles.main}>
            <div className={styles.container}>
                <div className={styles.signupcontent}>
                    <form className={styles.form}>
                        <h2>Register</h2>
                        <div className={styles.inputcontainer}>
                            <input type="text" className={styles.forminput} placeholder="Username"/>
                        </div>
                        <div className={styles.inputcontainer}>
                            <input type="email" className={styles.forminput} placeholder="Email"/>
                        </div>
                        <div className={styles.inputcontainer}>
                            <input type="password" className={styles.forminput} placeholder="Password"/>
                        </div>
                        <div className={styles.inputcontainer}>
                            <input type="password" className={styles.forminput} placeholder="Password again"/>
                        </div>
                        <div className={styles.inputcontainer}>
                            <input type="checkbox"/>
                            <label htmlFor="" className={styles.labelagree}>
                                I agree all <a href="#">Terms & Service</a>
                            </label>
                        </div>
                        <div className={styles.inputcontainer}>
                            <input type="submit" value="Sign Up" className={styles.formsubmit}/>
                        </div>
                    </form>
                    <p className={styles.loginhere}>
                        Already have an account? 
                        <a href="/login"> Log In</a><br/>
                        <span className={styles.backhome}><a href="/">Home</a></span>
                    </p>
                    
                </div>
            </div>
        </div>
    )
}

export default register