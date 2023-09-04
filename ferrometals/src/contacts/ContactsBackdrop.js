import * as React from 'react';
import Backdrop from '@mui/material/Backdrop';
import CloseIcon from '@mui/icons-material/Close';

export default function ContactsBackdrop({emailValue, phoneNumberValue, phoneNumberSymbols, phoneNumberValidation, nameValue,
    textOnlyValidation, textOnlyForbiddenSymbols, form, setFeedbackFormVisibility, adaptiveFeedbackFormClass, setEmailInputValue,
    subjectValue, setSubjectInputValue, messageValue, setMessageInputValue, sendEmail, currentFormMessage, data}) {
  const [open, setOpen] = React.useState(false);
  const handleClose = () => {
    setOpen(false);
  };
  const handleOpen = () => {
    setOpen(true);
  };

  return (
    <div>
      <button onClick={handleOpen} className='Contacts-feedback-form-adaptive-button'>{data.contacts.feedback.adaptiveButtonText}</button>                
      {/* <Button onClick={handleOpen}>Show backdrop</Button> */}
      <Backdrop
        sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={open}
      >
        {/* <CircularProgress color="inherit" /> */}

        {/* <div className={`${adaptiveFeedbackFormClass} Adaptive-Contacts-feedback-form-outer-container`}> */}
                    {/* <div> */}
                        {/* <div className={`${adaptiveFeedbackFormClass} Adaptive-Contacts-feedback-form-background`}> */}
                            <div className="Contacts-feedback-form-container Adaptive-Contacts-feedback-form">
                                <button className="Contacts-feedback-form-adaptive-close-button" onClick={handleClose} ><CloseIcon/></button>
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
                                <p className="Contacts-feedback-form-extra-message">{currentFormMessage}</p>
                            </div>

                        {/* </div> */}
                        
                    {/* </div> */}
                    

                {/* </div> */}
      </Backdrop>
    </div>
  );
}