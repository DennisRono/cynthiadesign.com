import React from 'react'
import styles from '../styles/read.module.css'
import Footer from '../components/Footer'
import TwitterIcon from '@material-ui/icons/Twitter';
import FacebookIcon from '@material-ui/icons/Facebook';
import YouTubeIcon from '@material-ui/icons/YouTube';
import PhoneIcon from '@material-ui/icons/Phone';
import EmailIcon from '@material-ui/icons/Email';
import HorizontalSplitRoundedIcon from '@material-ui/icons/HorizontalSplitRounded';

export const read = () => {
    return (
        <div className={styles.read}>
            {/* navbar */}
            <div className={styles.jumbotron} id="jumbotron">
            <div className={styles.backimage}>
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
                        <a className={styles.register} href="/register">Sign up</a>
                        <a className={styles.login} href="/login">Sign in</a>
                    </div>
                    <div className={styles.responsivebars}>
                    <HorizontalSplitRoundedIcon />
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
            </div>
            {/* <div className={styles.distro}>
                yoh
            </div> */}
            
        </div>
            {/* body */}
            <div className={styles.path}>
                <div className={styles.pathcontainer}>
                    <p>Home > articles > cynthiadesign</p>
                    <p>TECHNOLOGY</p>
                </div>
                <div className={styles.readcontent}>
                    <div className={styles.readcontentcontainer}>
                        <div className={styles.readright}>
                            <h3>Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                                 Reiciendis, expedita minus? Cum adipisci ut vel!</h3>
                        <div className={styles.owner}>
                            <span>by Dennis</span> - 
                            <span> Feb 2020</span>
                            <span>   1000 views</span>
                            <span> 10 comments</span>
                        </div>
                        <div className={styles.articleimage}>

                        </div>
                        <div className={styles.articleread}>
                            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Animi labore repellendus sed vitae eligendi quas quidem iure, commodi soluta error. Debitis assumenda cumque facilis modi adipisci at iste cupiditate voluptatum. Fugit perferendis provident ipsum odit? Dignissimos hic ipsum modi incidunt numquam placeat similique natus atque, temporibus minus rem sapiente qui.</p>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde natus voluptatem alias! Qui dignissimos distinctio nihil, maiores inventore quibusdam deserunt aliquid voluptatem iusto delectus porro, laudantium saepe commodi minima consequuntur ducimus numquam libero sint necessitatibus! Provident, quia aperiam magni temporibus pariatur placeat quisquam? Doloremque perspiciatis assumenda modi suscipit eaque ipsam!</p>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim dolorem beatae pariatur illo odio corporis saepe iusto autem repellat expedita quia accusamus, magni architecto, eligendi quas commodi harum. Recusandae placeat reprehenderit, eius officia earum dicta hic fuga aspernatur eos repudiandae at velit iure fugit nobis. Mollitia eveniet impedit hic rem?</p>
                            <span>Tags: <span><a href="#">Technology</a></span>
                            <span><a href="#">Programming</a></span></span>
                            <br/>
                            <span>Share: <TwitterIcon /> <FacebookIcon /></span>

                            <h4>Leave a Comment</h4>
                            <p>Your email adress will not be published</p>
                            <form className={styles.commentform}>
                                <textarea name="msg" placeholder="Comment*" className={styles.commentbox}></textarea><br/>
                                <input className={styles.commentinput} type="email" placeholder="Email"/><br/>
                                <input className={styles.commentinput} type="text" placeholder="Name"/><br/>
                                <input type="submit" value="Post Comment" className={styles.postcommentbutton}/>
                            </form>
                        </div>
                        </div>
                        <div className={styles.readsidebar}>
                            <div className={styles.sidebarone}>
                            <div className={styles.sidebarheader}>
                                <h3>popular</h3>
                            </div>
                            <div className={styles.popularreads}>
                                <div className={styles.readone}>
                                <div className={styles.popimage}></div>
                                <div className={styles.poptext}>
                                    <h6><a href="#">Lorem, ipsum dolor sit amet consectetur adipisicing.</a></h6>
                                    <span>tech - Feb 18</span>
                                </div>
                                </div>
                                <div className={styles.readone}>
                                <div className={styles.popimage}></div>
                                <div className={styles.poptext}>
                                    <h6><a href="#">Lorem, ipsum dolor sit amet consectetur adipisicing.</a></h6>
                                    <span>tech - Feb 18</span>
                                </div>
                                </div>
                                <div className={styles.readone}>
                                <div className={styles.popimage}></div>
                                <div className={styles.poptext}>
                                    <h6><a href="#">Lorem, ipsum dolor sit amet consectetur adipisicing.</a></h6>
                                    <span>tech - Feb 18</span>
                                </div>
                                </div>
                            </div>
                            </div>
                            <div className={styles.sidebartwo}>
                            <div className={styles.sidebarheader}>
                                <h3>archive</h3>
                            </div>
                            <ul>
                                <li><a href="">Fashion</a></li>
                                <li><a href="">Adobe premiere</a></li>
                                <li><a href="">After effects</a></li>
                                <li><a href="">Football</a></li>
                            </ul>
                            </div>
                            <div className={styles.sidebarthree}>
                            <div className={styles.sidebarheader}>
                                <h3>category</h3>
                            </div>
                            <ul>
                                <li><a href="">Fashion</a></li>
                                <li><a href="">Adobe premiere</a></li>
                                <li><a href="">After effects</a></li>
                                <li><a href="">Football</a></li>
                            </ul>
                            </div>
                        </div>
                    </div>
                </div>
                
            </div>
            <Footer />
        </div>
    )
}

export default read