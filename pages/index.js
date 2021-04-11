import Head from 'next/head'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.main}>
      <Navbar />
      <div className={styles.aid}>
          <div className={styles.aidleft}>
            <div className={styles.aidimage}>
              <div className={styles.imagecenter}>

              </div>
            </div>
            <div className={styles.aidtext}>
            <h3>We need volunteers in Africa</h3>
            <p>Lorem ipsum dolor sit amet,<br/>
             consectetur adipisicing elit.<br/>
              Perspiciatis beatae atque cupiditate ab<br/>
               reprehenderit perferendis inventore<br/>
                ad repellendus excepturi facilis.</p>
                <br/>
            <button className={styles.aidbutton}>JOIN</button>
            </div>
          </div>
          <div className={styles.aidright}>
            <h2>Join the Community <br/> <span>30,000+</span> edits</h2>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing<br />
             elit. Quos doloremque natus mollitia laudantium alias<br />
              modi, nulla exercitationem tenetur veritatis quaerat ab,<br />
               voluptas assumenda accusamus commodi, quam consectetur.<br />
                Saepe, eaque magnam?</p>
          </div>
      </div>
      
      <div className={styles.content}>
                <div className={styles.contentcontainer}>
                <h1 className={styles.cententheader}>
                  <u>Our Gallery</u>
                </h1>
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
            
      <Footer />
      <a href="#jumbotron">
      <div className={styles.restoreup}></div>
      </a>
    </div>
  )
}
