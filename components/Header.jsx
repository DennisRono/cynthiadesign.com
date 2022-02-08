import React from 'react'
import '../styles/header.module.css'

export const Header = () => {
    return (
        <div>
            <header className="header">
                <div className="top-popup">
                    <div className="container">
                        <span className="top-left">
                            <span className="hide">Welcome</span>
                            <a href="" className="left-topbar-item hide"><span>Sign in</span></a>
                            <a href="" className="left-topbar-item hide"><span>Sign up</span></a>
                            <a href="" className="left-topbar-item"><span>About</span></a>
                            <a href="" className="left-topbar-item"><span>Contact Us</span></a>
                        </span>
                        <span className="top-right">
                            <a href=""><i className="fab fa-whatsapp"></i></a>
                            <a href=""><i className="fab fa-facebook-f"></i></a>
                            <a href="" id="hide"><i className="fab fa-instagram"></i></a>
                            <a href="" id="hide"><i className="fab fa-pinterest-p"></i></a>
                            <a href="" id="hide"><i className="fab fa-vimeo-v"></i></a>
                            <a href=""><i className="fab fa-youtube"></i></a>
                        </span>
                    </div>
                </div>
                <div className="header-center">
                    <div className="container center-flex">
                        <div className="logo-header nav-cont-l">
                            <div className="logo-image">
                                <img src="./img/favicon.ico" alt=""/>
                            </div>
                            <div className="logo-text">
                                <h3>nitrodizz</h3>
                            </div>
                        </div>
                        <div className="member-join">
                            <a href="./register.html" className="register-button">Sign up</a>
                            <a href="./login.html" className="login-button">Sign in</a>                    
                        </div>
                        <span className="resopen">
                            <i className="nav-cont navopen fas fa-bars" onclick="navbar()"></i>
                            <i id="navclose" className="nav-cont fas fa-times" onclick="navclose()" style="display: none;"></i>
                        </span>
                    </div>
                </div>
                <div className="navbar" id="sticky-header">
                    <div className="container">
                        <div className="navbar-flex">
                            <nav className="nav">
                                <ul className="unlist">
                                    <li className="link_1"><a className="active link_header1" href="./index.html">Home</a></li>
                                    <li className=""><a className="link_header2" href="./about.html">About</a></li>
                                    <li className=""><a className="link_header3" href="./services.html">Services</a></li>
                                    <li className=""><a className="link_header4" href="./blog.html">Blog</a></li>
                                    <li className=""><a className="link_header5" href="./contact.html">Contact</a></li>
                                </ul>
                            </nav>
                            <div className="h_search">
                                <form className="navform" id="navform">
                                    <input className="searchinput" type="text" placeholder="Search.." />
                                    <i className="fas fa-search" type="submit" name="submit" onclick="closeform();"></i>
                                </form>
                                <div className="show_search_form" id="openform">
                                    <i className="fas fa-search" onclick="showsearchform();"></i>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        </div>
    )
}

export default Header