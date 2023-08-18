import Nav from '../nav/Nav';
import Callback from './Callback';
// import TopScroll from './TopScroll';
import dataRu from "../data/dataRu";
import dataEn from "../data/dataEn";
import dataLt from "../data/dataLt";
import dataPl from "../data/dataPl";
import BurgerMenuNav from "../nav/BurgerMenuNav"
import { useState, useEffect } from 'react';
// import MenuIcon from '@mui/icons-material/Menu';


const Header = ({data, navigateToTheTop, linkScroll, changeLanguage, open, handleClose, handleToggle, changeHeaderBackground, headerBackground}) => {
    const fullPhoneNumber = "tel:" + data.header.phoneNumber;
    const fullEmail = "mailto:" + data.header.email;

    const [ltButtonBorder, setLtButtonBorder] = useState("");
    const [enButtonBorder, setEnButtonBorder] = useState("");
    const [plButtonBorder, setPlButtonBorder] = useState("");
    const [ruButtonBorder, setRuButtonBorder] = useState("");

    const changeLtButtonBorderStyle = () => {
        setLtButtonBorder("4px solid var(--main-background-color)");
        setEnButtonBorder("");
        setPlButtonBorder("");
        setRuButtonBorder("");
    } 

    const changeEnButtonBorderStyle = () => {
        setLtButtonBorder("");
        setEnButtonBorder("4px solid var(--main-background-color)");
        setPlButtonBorder("");
        setRuButtonBorder("");
    } 

    const changePlButtonBorderStyle = () => {
        setLtButtonBorder("");
        setEnButtonBorder("");
        setPlButtonBorder("4px solid var(--main-background-color)");
        setRuButtonBorder("");
    } 

    const changeRuButtonBorderStyle = () => {
        setLtButtonBorder("");
        setEnButtonBorder("");
        setPlButtonBorder("");
        setRuButtonBorder("4px solid var(--main-background-color)");
    } 

    const [logoVisibility, setLogoVisibility] = useState("First-Page-Header-Logo");

    

    useEffect(() => {
        const handleScroll = event => {
            if(window.location.pathname !== "/") {
                setLogoVisibility("")
            } else {
                setLogoVisibility("First-Page-Header-Logo")
            }
            if (window.pageYOffset > 10) {
              setLogoVisibility("") 
            }
        };
        window.addEventListener('scroll', handleScroll);
        window.addEventListener('click', handleScroll);
      })

    return (
        <header className="App-header w3-container w3-text" id={headerBackground}>
            <div className="Header-logo-container">
                <img src={require('../img/logotype.png')} alt="Ferrometels LLC logotype" className={`Header-logo 
                ${logoVisibility}`}></img>
            </div>
            <div className="Header-info-container">
                <div className="Header-main-container">
                    <div className="Header-contacts-container">
                            <div className='Link-Extra-Container'>
                                <p className="Header-contacts">
                                    <a className="Header-contacts-link" href={fullPhoneNumber}>
                                        <img className='Header-Icon' alt="Icon" src={require("../img/header_phone_icon.png")}>
                                        </img>
                                        {data.header.phoneNumber}
                                    </a>
                                </p>
                            </div>
                            <div className='Link-Extra-Container'>
                                <p className="Header-contacts">
                                    <a className="Header-contacts-link" href={fullEmail}>
                                        <img className='Header-Icon Header-Mail-Icon' alt="Icon" 
                                        src={require("../img/header_email_icon.png")}>
                                        </img>
                                        {data.header.email}
                                    </a>
                                </p>
                            </div>
                            <div className='Footer-Info Link-Extra-Container'>
                                {/* <img alt="Icon" className='Header-Callback-Icon Pulse-Icon' src={require(`../img/header_callback_icon.png`)}>
                                </img> */}
                                <Callback data={data} open={open} handleClose={handleClose} handleToggle={handleToggle} 
                                classname="Callback-button" iconUrl={`header_callback_icon.png`}/>
                            </div>
                    </div>
                    <div className='Header-common-container'>
                        <div className="Header-language-buttons-container">
                                <button style={{border: ltButtonBorder}} className="Header-language-button" onClick={() => 
                                    {changeLanguage(dataLt); changeLtButtonBorderStyle()}}>
                                    <span className='Header-language-button-text'>LT</span>
                                </button>
                                <button style={{border: enButtonBorder}} className="Header-language-button" onClick={() => 
                                {changeLanguage(dataEn); changeEnButtonBorderStyle()}}>
                                    <span className='Header-language-button-text'>EN</span>
                                </button>
                                <button style={{border: plButtonBorder}} className="Header-language-button" onClick={() => 
                                {changeLanguage(dataPl); changePlButtonBorderStyle()}}>
                                    <span className='Header-language-button-text'>PL</span>
                                </button>
                                <button style={{border: ruButtonBorder}} className="Header-language-button" onClick={() => 
                                {changeLanguage(dataRu); changeRuButtonBorderStyle()}}>
                                    <span className='Header-language-button-text'>RU</span>
                                </button>
                        </div>
                        <div className='navBurgerMenuContainer'>
                            <BurgerMenuNav data={data} navigateToTheTop={navigateToTheTop} linkScroll={linkScroll} 
                            changeHeaderBackground={changeHeaderBackground}/>
                        </div>
                    </div>
                </div>
                <Nav className="Header-nav" data={data} navigateToTheTop={navigateToTheTop} linkScroll={linkScroll} 
                changeHeaderBackground={changeHeaderBackground}/>
            </div>
            {/* <TopScroll />   */}
        </header>
    )
}

export default Header