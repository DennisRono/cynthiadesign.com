import React from 'react'
import styles from '../styles/slim.module.css'

export const Slim = () => {
    return (
        <div className={styles.slim}>
            <div className={styles.slimcontainer}>
                <span>schedule</span>
                <h2>Downloads</h2>
                <p>All of our special downloads</p>
            <div className={styles.navlinkwrap}>
	            <div className={styles.navpills} role="tablist" aria-orientation="vertical">
	              <a className={styles.navlink} data-toggle="pill" href="#v-pills-8" role="tab" aria-controls="v-pills-8" aria-selected="true">
	              Monday <span>Fitness Program</span></a>

	              <a className={styles.navlink} data-toggle="pill" href="#v-pills-9" role="tab" aria-controls="v-pills-9" aria-selected="false">
	              Tuesday <span>Crossfit Program</span></a>

	              <a className={styles.navlink} data-toggle="pill" href="#v-pills-10" role="tab" aria-controls="v-pills-10" aria-selected="false">
	              Wednesday <span>Aerobic Program</span></a>

	              <a className={styles.navlink} data-toggle="pill" href="#v-pills-11" role="tab" aria-controls="v-pills-11" aria-selected="false">
	              Thursday <span>Yoga Classes</span></a>

	              <a className={styles.navlink} data-toggle="pill" href="#v-pills-12" role="tab" aria-controls="v-pills-12" aria-selected="false">
	              Friday <span>Fitness Program</span></a>

	              <a className={styles.navlink} data-toggle="pill" href="#v-pills-13" role="tab" aria-controls="v-pills-13" aria-selected="false">
	              Saturday <span>Yoga Classes</span></a>

	              <a className={styles.navlink} data-toggle="pill" href="#v-pills-14" role="tab" aria-controls="v-pills-14" aria-selected="false">
	              Sunday <span>Crossfit Program</span></a>

	            </div>
                <div className={styles.slimcontentarea}>
                    <div className={styles.slimrightone}>
					<div className={styles.slimdownloadone}>
						<button>&times;</button>
					</div>
					<div className={styles.slimdownloadtwo}></div>
					<div className={styles.slimdownloadthree}></div>
					<div className={styles.slimdownloadfour}></div>
                    </div>
                    <div className={styles.slimrighttwo}>
					<div className={styles.slimdownloadfive}></div>
					<div className={styles.slimdownloadsix}></div>
					<div className={styles.slimdownloadseven}></div>
					<div className={styles.slimdownloadeight}></div>
					</div>
                    <div className={styles.slimrightthree}>
					<div className={styles.slimdownloadnine}></div>
					<div className={styles.slimdownloadten}></div>
					<div className={styles.slimdownloadeleven}></div>
					<div className={styles.slimdownloadtwelve}></div>
					</div>
                </div>
	          </div>
            </div>
        </div>
    )
}

export default Slim