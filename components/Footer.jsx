import React from 'react'
import styles from '../styles/footer.module.css'
import TwitterIcon from '@material-ui/icons/Twitter';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';

export const Footer = () => {
    return (
        <div className={styles.footer}>
            <div className={styles.footercontainer}>
                <div className={styles.footercontent}>
                    <div className={styles.footerone}>
                        <h1>Cynthia design.</h1>
                        <br/>
                        <p>cynthiadesign@support.com</p>
                        <p>+254 743 733 503</p>
                        <p>Roret_Kericho_Kenya</p>
                        <br/>
                        <FacebookIcon className={styles.facebookicon}/>
                        <TwitterIcon className={styles.twittericon}/>
                        <InstagramIcon className={styles.instagramicon}/>
                    </div>
                    <div className={styles.footertwo}>
                        <h1>Services</h1>
                        <br/>
                        <p>Marketing & SEO</p>
                        <p>Photoshop</p>
                        <p>Photography</p>
                        <p>Illustration</p>
                        <p>Cinematography</p>
                        <p>video Editing</p>
                        <p>B-rolls</p>
                    </div>
                    <div className={styles.footerthree}>
                        <h1>Useful Links</h1>
                        <br/>
                        <p>Blog</p>
                        <p>About</p>
                        <p>Photo-Collections</p>
                        <p>Contact Us</p>
                    </div>
                    <div className={styles.footerfour}>
                        <h1>Subscribe</h1>
                        <br/>
                        <div className={styles.navSearch}>
                            <input type="text" className={styles.navInput} placeholder="Enter your email..."/>
                            <input type="submit" value="Subscribe" className={styles.navbutton}/>
                        </div>
                        <p>Subscribe to our newsletter <br/>to get useful information and updates.</p>
                    </div>
                </div>
                <hr/>
                <p className={styles.copyright}>
                    Copyright &copy; 2021 All rights reserved | Dennis Rono
                </p>
            </div>
        </div>
    )
}

export default Footer