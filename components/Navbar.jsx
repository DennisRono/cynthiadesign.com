import React from 'react'
import styles from '../styles/navbar.module.css'
import TwitterIcon from '@material-ui/icons/Twitter';
import FacebookIcon from '@material-ui/icons/Facebook';
import YouTubeIcon from '@material-ui/icons/YouTube';
import PhoneIcon from '@material-ui/icons/Phone';
import EmailIcon from '@material-ui/icons/Email';


export const Navbar = () => {
    return (
        <div className={styles.jumbotron}>
            <div className={styles.conbusi}>
                <div className={styles.conbusiContainer}>
                    <p>Welcome to cynthia design</p>
                    <div className={styles.conbusiRight}>
                        <div className={styles.conbusiEmail}>
                            <i><EmailIcon className={styles.EmailIcon}/></i>
                        </div>
                        <div className={styles.conbusiNumber}>
                            <i><PhoneIcon /></i>
                        </div>
                        <div className={styles.conbusiSocials}>
                            <TwitterIcon />
                            <FacebookIcon />
                            <YouTubeIcon />
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles.constructo}>
                <div className={styles.constructoContainer}>
                    <div className={styles.constructoLogo}>
                        <h1>Chela</h1>
                    </div>
                    <div className={styles.constructoButtons}>
                        <a className={styles.register}>Sign up</a>
                        <a className={styles.login}>Sign in</a>
                    </div>
                </div>
            </div>
            <div className={styles.navbar}>
                <nav>
                    <ul className={styles.navbarul}>
                        <li><a href="/">Home</a></li>
                        <li><a href="/about">About</a></li>
                        <li><a href="/services">Services</a></li>
                        <li><a href="/contact">Contact Us</a></li>
                    </ul>
                </nav>
                <div className={styles.navSearch}>
                    <input type="text" className={styles.navInput} placeholder="Search..."/>
                    <input type="submit" value="Search" className={styles.navbutton}/>
                </div>
            </div>
            <div className={styles.content}>
                <div className={styles.contentcontainer}>
                    <br/><br/>
                    <div className={styles.splashscreen}>
                    <div className={styles.picone}>
                        
                    </div>
                    <div className={styles.splashscreentwo}>
                        <div className={styles.pictwo}></div>
                        <div className={styles.spashscreenthree}>
                            <div className={styles.picthree}></div>
                            <div className={styles.picfour}></div>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar