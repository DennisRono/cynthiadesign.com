import React from 'react'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import styles from '../styles/about.module.css'

export const about = () => {
    return (
        <div>
            <Navbar />
            <div className={styles.aboutpage}>
                <h1>About</h1>
            </div>
            <Footer />
        </div>
    )
}

export default about