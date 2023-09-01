import { useState, useRef  } from "react";
import "./contacts.css";
// import CloseIcon from '@mui/icons-material/Close';
import emailjs from '@emailjs/browser';

const Contacts = ({data, currentViewportHeight, currentViewportWidthIsLarger, currentViewportWidth}) => {
    
    const fullPhoneNumber = "tel:" + data.header.phoneNumber;
    const fullEmail = "mailto:" + data.header.email;

    const [adaptiveFeedbackFormClass, setAdaptiveFeedbackFormClass] = useState("Invisible-Feedback-Form")

    const setFeedbackFormVisibility = () => {
        if (adaptiveFeedbackFormClass === "Invisible-Feedback-Form") {
            setAdaptiveFeedbackFormClass("Visible-Feedback-Form")
        } else {
            setAdaptiveFeedbackFormClass("Invisible-Feedback-Form")
        }
        
    }

    const [nameValue, setNameValue] = useState("");

    const [phoneNumberValue, setPhoneNumberValue] = useState("");

    const [emailValue, setEmailValue] = useState("");

    const [subjectValue, setSubjectValue] = useState("");

    const [messageValue, setMessageValue] = useState("");

    const [currentFormMessage, setCurrentFormMessage] = useState("");

    const textOnlyForbiddenSymbols = "1234567890~@#$%^&*{}:?><.,/*+-№=;";

    const phoneNumberSymbols = "1234567890+()";


    const textOnlyValidation = (inputValue, symbols) => {
        if (symbols.includes(inputValue[inputValue.length - 1])) {
            setNameValue(inputValue.slice(0, -1))
        } else {
            setNameValue(inputValue)
            }
    }

    const phoneNumberValidation = (inputValue, symbols) => {
        if (!symbols.includes(inputValue[inputValue.length - 1])) {
            setPhoneNumberValue(inputValue.slice(0, -1))
        } else {
            setPhoneNumberValue(inputValue)
            }
    }

    const setEmailInputValue = (value) => {
        setEmailValue(value)
    }

    const setSubjectInputValue = (value) => {
        setSubjectValue(value)
    }

    const setMessageInputValue = (value) => {
        setMessageValue(value)
    }

    const resetForm = () => {
        setNameValue("");
        setPhoneNumberValue("");
        setEmailValue("");
        setSubjectValue("");
        setMessageValue("")
    }

    const form = useRef();

    const sendEmail = (e) => {
        setCurrentFormMessage(data.contacts.feedback.loadingText);
        e.preventDefault();
        if (nameValue !== "" && (emailValue !== "" || phoneNumberValue !== "")) {
            emailjs.sendForm('service_j50xckc', 'template_knzuzjh', form.current, 'eXu1yPCc0paCDwe5f')
            .then((result) => {
                console.log(result);
                setTimeout(
                    () => setCurrentFormMessage(data.contacts.feedback.resultText), 
                    3000
                );
            }, (error) => {
                console.log(error.text);
                setCurrentFormMessage(data.contacts.feedback.errorText);
            });
            resetForm();
        }
        setTimeout(
            () => setCurrentFormMessage(""), 
            20000
          );
    };

    
    return (
        <article className='Contacts-Main-Container'>
                <div className='First-Page-Picture-Container' style={{height: `${currentViewportHeight*0.8}px`, marginLeft: 
                `${377.27272727273 / 746 * currentViewportHeight - 377.27272727273 / 746 * currentViewportHeight * 
                Number(currentViewportWidthIsLarger) / 2}px`, width: `${currentViewportWidth - (377.27272727273 / 746 * 
                currentViewportHeight - 377.27272727273 / 746 * currentViewportHeight * Number(currentViewportWidthIsLarger) / 2)}px`}}>
                </div>
                <div className='First-Page-Button-Container Contacts-Adaptive-Button-Container' 
                style={{height: `${currentViewportHeight - currentViewportHeight*0.8 }px`, top: `${currentViewportHeight*0.8}px`}}>
                </div>
                <div className='Contacts-feedback-form-adaptive-button-container' style={{top: `${523.22495023225 / 746 * currentViewportHeight}px`, 
            height: `${(749.0378234903 - 523.22495023225) / 746 * currentViewportHeight}px`, width: `${495.68679495687 / 746 * 
            currentViewportHeight - 377.27272727273 / 746 * currentViewportHeight * Number(currentViewportWidthIsLarger) / 2}px`}}>
                    <button className='Contacts-feedback-form-adaptive-button' onClick={setFeedbackFormVisibility}>{data.contacts.feedback.adaptiveButtonText}</button>                
                </div>
                {/* <div className={`${adaptiveFeedbackFormClass} Adaptive-Contacts-feedback-form-outer-container`}>
                    <div>
                        <div className={`${adaptiveFeedbackFormClass} Adaptive-Contacts-feedback-form-background`}>
                            <div className="Contacts-feedback-form-container Adaptive-Contacts-feedback-form">
                                <button className="Contacts-feedback-form-adaptive-close-button" onClick={setFeedbackFormVisibility}><CloseIcon/></button>
                                <h4 className="Contacts-container-heading">{data.contacts.feedback.heading}</h4>
                                <p className="Contacts-container-description">{data.contacts.feedback.description}</p>
                                <form className="Contacts-feedback-form-input-container" ref={form}>
                                    <div className="Contacts-feedback-form-input-container-without-text-form-input">
                                        <input  name="user_name" onChange={event => {textOnlyValidation(event.target.value, textOnlyForbiddenSymbols)}} value={nameValue} className="Contacts-feedback-form-input" placeholder={data.contacts.feedback.nameInputText}></input>
                                        <input name="user_phone_number" onChange={event => {phoneNumberValidation(event.target.value, phoneNumberSymbols)}} value={phoneNumberValue} className="Contacts-feedback-form-input" placeholder={data.contacts.feedback.phoneInputText}></input>
                                    </div>
                                    <div className="Contacts-feedback-form-input-container-without-text-form-input">
                                        <input value={emailValue} onChange={event => {setEmailInputValue(event.target.value)}} name="user_email" 
                                        className="Contacts-feedback-form-input" placeholder={data.contacts.feedback.emailInputText}></input>
                                        <input value={subjectValue} onChange={event => {setSubjectInputValue(event.target.value)}} name="user_subject" 
                                        className="Contacts-feedback-form-input" placeholder={data.contacts.feedback.subjectInputText}></input>
                                    </div>
                                    <textarea value={messageValue} onChange={event => {setMessageInputValue(event.target.value)}} name="user_message" className="Contacts-feedback-form-text-input" placeholder={data.contacts.feedback.messageInputText}></textarea>
                                </form>
                                <p className="Contacts-feedback-form-bottom-text">{data.contacts.feedback.bottomText}</p>
                                <button className="Contacts-feedback-form-button Adaptive-Contacts-feedback-form-button" onClick={sendEmail}>{data.contacts.feedback.buttonText}</button>
                                <p>{currentFormMessage}</p>
                            </div>

                        </div>
                        
                    </div>
                    

                </div> */}
            <svg className='First-Page-Svg' xmlns="http://www.w3.org/2000/svg" style={{fill:"url(#FirstDecorElementGradient)", position: "absolute", width: "100%", top: "0", right: "0", height: "100%"}}>
                <linearGradient id="FirstDecorElementGradient">
                <stop offset="50%" stopColor="rgba(48,48,49,255)" />
                <stop offset="90%" stopColor="rgba(48,48,49,0.6)" />
                </linearGradient>
                <polygon points={`
                0,0 
                ${677.43861977438 / 746 * currentViewportHeight - 377.27272727273 / 746 * currentViewportHeight * Number(currentViewportWidthIsLarger) / 2},0 
                ${377.27272727273 / 746 * currentViewportHeight - 377.27272727273 / 746 * currentViewportHeight * Number(currentViewportWidthIsLarger) / 2}, ${550.76310550763 / 746 * currentViewportHeight}
                0,${550.76310550763 / 746 * currentViewportHeight}
                `} />
                Sorry, your browser does not support inline SVG.
            </svg> 
            <div className='Contacts-Inner-Container' style={{height: `${550.76310550763 / 746 * currentViewportHeight}px`, 
            maxWidth: `${512.2096881221 / 746 * currentViewportHeight - 377.27272727273 / 746 * currentViewportHeight * 
            Number(currentViewportWidthIsLarger) / 2}px`}}>
                <div className="Contacts-inner-content-container">
                            <h4 className="Contacts-inner-container-heading">{data.contacts.address.heading}</h4>
                        <div className="Contacts-inner-content-container Contacts-Items-Container">
                            <div className="Contacts-text-container" style={{maxWidth: `${512.2096881221 / 746 * currentViewportHeight - 377.27272727273 / 746 * currentViewportHeight * 
            Number(currentViewportWidthIsLarger) / 2}px`}}><p className="Contacts-item">
                                    <img className="Contacts-icon" alt="Icon" src={require(`../img/contacts_location_icon.png`)}></img>
                                    {data.contacts.address.text}</p></div>
                            <div><p className="Contacts-item"><a className="Contacts-item" href={fullPhoneNumber}>
                                    <img className="Contacts-icon" alt="Icon" src={require(`../img/contacts_call_icon.png`)}></img>
                                    {data.header.phoneNumber}</a></p></div>
                            <div><p className="Contacts-item"><a className="Contacts-item" href={fullEmail}>
                                    <img className="Contacts-icon" alt="Icon" src={require(`../img/contacts_email_icon.png`)}></img>
                                    {data.header.email}</a></p></div>
                        </div>
                </div>
                <div className="Contacts-inner-content-container Contacts-Bottom-Text-Container">
                            <h4 className="Contacts-inner-container-heading Contacts-second-inner-container-heading">{data.contacts.address.detailsHeading}</h4>
                            <p style={{maxWidth: `${512.2096881221 / 746 * currentViewportHeight - 377.27272727273 / 746 * currentViewportHeight * 
            Number(currentViewportWidthIsLarger) / 2}px`}} className="Contacts-inner-container-text">{data.contacts.address.details}</p>
                </div>
            </div>
            <svg className='First-Page-Svg' style={{fill:"url(#SecondDecorElementGradient)", position: "absolute", width: "100%", top: "0", right: "0", height: "100%"}}>
                <linearGradient id="SecondDecorElementGradient">
                <stop offset="30%" stopColor="rgba(20,172,147,255)" />
                <stop offset="90%" stopColor="rgba(13,94,114,0.6)" />
                </linearGradient>
                <polygon points={`
                0,0 
                ${473.65627073656 / 746 * currentViewportHeight - 377.27272727273 / 746 * currentViewportHeight * Number(currentViewportWidthIsLarger) / 2},0 
                ${649.900464499 / 746 * currentViewportHeight - 377.27272727273 / 746 * currentViewportHeight * Number(currentViewportWidthIsLarger) / 2},${308.42733908427 / 746 * currentViewportHeight} 
                ${512.2096881221 / 746 * currentViewportHeight - 377.27272727273 / 746 * currentViewportHeight * Number(currentViewportWidthIsLarger) / 2},${550.76310550763 / 746 * currentViewportHeight} 
                0,${550.76310550763 / 746 * currentViewportHeight}
                `} />
                Sorry, your browser does not support inline SVG.
            </svg>
            {/* <svg className='First-Page-Svg' style={{fill:"url(#ThirdDecorElementGradient)", position: "absolute", width: "100%", top: "0", right: "0", height: "100%"}}>
                <linearGradient id="ThirdDecorElementGradient">
                <stop offset="30%" stopColor="rgba(48,48,49,255)" />
                <stop offset="90%" stopColor="rgba(138,137,136,255)" />
                </linearGradient>
                <polygon points={`
                0,${523.22495023225 / 746 * currentViewportHeight} 
                ${495.68679495687 / 746 * currentViewportHeight - 377.27272727273 / 746 * currentViewportHeight * Number(currentViewportWidthIsLarger) / 2},${523.22495023225 / 746 * currentViewportHeight} 
                ${616.85467816855 / 746 * currentViewportHeight - 377.27272727273 / 746 * currentViewportHeight * Number(currentViewportWidthIsLarger) / 2},${749.03782349038 / 746 * currentViewportHeight} 
                0,${749.0378234903 / 746 * currentViewportHeight}
                `} />
                Sorry, your browser does not support inline SVG.
            </svg> */}


<div className='First-Page-List-Container' style={{ top: `${523.22495023225 / 746 * currentViewportHeight}px`, 
            height: `${(749.0378234903 - 523.22495023225) / 746 * currentViewportHeight}px`, width: `${616.85467816855 / 746 * 
            currentViewportHeight - 377.27272727273 / 746 * currentViewportHeight * Number(currentViewportWidthIsLarger) / 2}px`}}>
                <svg className='First-Page-Svg' style={{fill:"url(#ThirdDecorElementGradient)", position: "absolute", width: "100%", 
                top: "0", right: "0", height: "100%", zIndex: "90"}}>
                    <linearGradient id="ThirdDecorElementGradient">
                        <stop offset="30%" stopColor="rgba(48,48,49,255)" />
                        <stop offset="90%" stopColor="rgba(138,137,136,255)" />
                    </linearGradient>
                    <polygon points={`
                    0,${(523.22495023225 - 523.22495023225) / 746 * currentViewportHeight} 
                    ${495.68679495687 / 746 * currentViewportHeight - 377.27272727273 / 746 * currentViewportHeight * 
                    Number(currentViewportWidthIsLarger) / 2},${(523.22495023225 - 523.22495023225) / 746 * currentViewportHeight} 
                    ${616.85467816855 / 746 * currentViewportHeight - 377.27272727273 / 746 * currentViewportHeight * 
                    Number(currentViewportWidthIsLarger) / 2},${(749.03782349038  - 523.22495023225) / 746 * currentViewportHeight 
                    - 1.3} 
                    0,${(749.03782349038  - 523.22495023225) / 746 * currentViewportHeight - 1.3}
                    `} />
                    Sorry, your browser does not support inline SVG.
                </svg> 
               
            </div>



            <div className="Contacts-feedback-form-main-container">
            <div className="Contacts-feedback-form-container">
                <h4 className="Contacts-container-heading">{data.contacts.feedback.heading}</h4>
                <p className="Contacts-container-description">{data.contacts.feedback.description}</p>
                <form className="Contacts-feedback-form-input-container" ref={form}>
                    <div className="Contacts-feedback-form-input-container-without-text-form-input">
                        <input  name="user_name" onChange={event => {textOnlyValidation(event.target.value, textOnlyForbiddenSymbols)}} value={nameValue} className="Contacts-feedback-form-input" placeholder={data.contacts.feedback.nameInputText}></input>
                        <input name="user_phone_number" onChange={event => {phoneNumberValidation(event.target.value, phoneNumberSymbols)}} value={phoneNumberValue} className="Contacts-feedback-form-input" placeholder={data.contacts.feedback.phoneInputText}></input>
                    </div>
                    <div className="Contacts-feedback-form-input-container-without-text-form-input">
                        <input value={emailValue} onChange={event => {setEmailInputValue(event.target.value)}} name="user_email" 
                        className="Contacts-feedback-form-input" placeholder={data.contacts.feedback.emailInputText}></input>
                        <input value={subjectValue} onChange={event => {setSubjectInputValue(event.target.value)}} name="user_subject" 
                        className="Contacts-feedback-form-input" placeholder={data.contacts.feedback.subjectInputText}></input>
                    </div>
                    <textarea value={messageValue} onChange={event => {setMessageInputValue(event.target.value)}} name="user_message" className="Contacts-feedback-form-text-input" placeholder={data.contacts.feedback.messageInputText}></textarea>
                </form>
                <p>{data.contacts.feedback.bottomText}</p>
                <button className="Contacts-feedback-form-button" onClick={sendEmail}>{data.contacts.feedback.buttonText}</button>
                <p>{currentFormMessage}</p>
            </div>
            </div>
            </article>
        // 
            
        // </section>
    )
}

export default Contacts;