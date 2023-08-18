import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import CallbackButton from './CallbackButton';
import Button from '@mui/material/Button';
import { useState, useEffect } from 'react';

const Footer = ({data, handleToggle, navigateToTheTop, linkScroll}) => {
    const fullPhoneNumber = "tel:" + data.header.phoneNumber;
    const fullEmail = "mailto:" + data.header.email;

    const [currentFooterColor, setCurrentFooterColor] = useState("");

    const [currentFooterBackground, setCurrentFooterBackground] = useState("")

    const currentPath = window.location.pathname;

    useEffect(() => {
        if(currentPath === "/contacts" || currentPath === "/") {
            setCurrentFooterColor("Darken-Footer");
            setCurrentFooterBackground("")
            
        } else if (currentPath === "/about" || currentPath === "/products" || currentPath === "/gallery") {
            setCurrentFooterColor("");
            setCurrentFooterBackground("Footer-Single-Gear-Background")
        } else {
            setCurrentFooterColor("");
            setCurrentFooterBackground("Footer-Double-Gears-Background")
        }
      }, [currentPath])

    return (
        // className={`App-Footer-Background ${currentFooterBackground}`}
        <footer className={`App-footer ${currentFooterColor}`}>
            {/* <div className={`App-footer ${currentFooterColor}`}> */}
            <img src={require('../img/logotype.png')} alt="Ferrometals LLC logotype" className="Footer-Nameplate"></img>
            <div className='Footer-Container'>
                <div className='Footer-Adaptive-Extra-Container Top-Adaptive-Container'>
                    <div className='Footer-Info-Container Footer-Info-Thin-Container'>
                        <Link className="Footer-Info Footer-Info-Adaptive" to={data.menuPaths.contacts} onClick={linkScroll}>
                            {/* <LocationOnIcon /> */}
                            <img className='Footer-Icon' alt="Icon" src={require(`../img/footer_location_icon.png`)}></img>
                            {data.footer.address}</Link>
                        <a className="Footer-Info Footer-Info-Adaptive" href={fullEmail}>
                            {/* <EmailIcon className='Header-icon' /> */}
                            <img className='Footer-Icon' alt="Icon" src={require(`../img/footer_email_icon.png`)}></img>
                            {data.header.email}</a>
                        <a className="Footer-Info Footer-Info-Adaptive" href={fullPhoneNumber}>
                            {/* <CallIcon className='Header-icon' /> */}
                            <img className='Footer-Icon' alt="Icon" src={require(`../img/footer_phone_icon.png`)}></img>
                            {data.header.phoneNumber}</a>
                        <div className='Footer-Callback-Extra-Button'>
                        <CallbackButton style={{overflowY: "hidden", border: "none"}} data={data} handleToggle={handleToggle} iconUrl={`footer_callback_icon.png`}
                         classname="Footer-Callback Callback-button Footer-Callback-Adaptive" iconClass="Footer-Callback-Icon"/>
                        </div>
                    </div>
                    <div className='Footer-Links-Container'>
                        <Link className='Footer-Link' to={data.menuPaths.home} onClick={navigateToTheTop}>- {data.menuItems.home}</Link>
                        <Link className='Footer-Link' to={data.menuPaths.about} onClick={linkScroll}>- {data.menuItems.about}</Link>
                        <Link to={data.menuPaths.products} className='Footer-Link' onClick={linkScroll}>- {data.menuItems.products}</Link>
                    </div>
                </div>
                <div className='Footer-Adaptive-Extra-Container'>
                    <div className='Footer-Links-Container'>
                    <Link className='Footer-Link' to={data.menuPaths.catalog} onClick={linkScroll}>- {data.menuItems.catalog}</Link>
                    <Link className='Footer-Link' to={data.menuPaths.gallery} onClick={linkScroll}>- {data.menuItems.gallery}</Link>
                    <Link className='Footer-Link' to={data.menuPaths.contacts} onClick={linkScroll}>- {data.menuItems.contacts}</Link>
                    </div>
                    <div className='Footer-Info-Container'>
                        <div className='Footer-Info-Inner-Container'>
                            <p className="Footer-Copyright">{data.footer.copyright}</p>
                            <Link className="Footer-Info" to={data.menuPaths.privacypolicy} onClick={linkScroll}>
                            {data.footer.privacyPolicy}</Link>
                        </div>
                        <Button variant="text" sx={{ fontFamily: data.MUIFont, marginTop: "5%", fontSize: "90%", fontWeight: "500", 
                        textTransform: "none", textAlign: "left", padding: "0", color:"rgba(20,172,147,255)", 
                        borderColor:"rgba(20,172,147,255)", 
                        ':hover': {borderColor:"rgba(20,172,147,255)", color: "var(--main-background-color)"}}}>
                        {data.footer.siteDeveloper[0]}<br/>{data.footer.siteDeveloper[1]}</Button>
                    </div>
                </div>
            </div>
            {/* </div> */}
      </footer>
    )
}

export default Footer