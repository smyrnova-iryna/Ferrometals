import * as React from 'react';
// import PhoneCallbackIcon from '@mui/icons-material/PhoneCallback';
import "../products/products.css";

export default function CallbackButton ({data, handleToggle, classname, iconUrl}) {
  return (
      <div className='Callback-button-container Pulse-Icon'>
        <button className={classname} onClick={handleToggle}>
          {/* <PhoneCallbackIcon className='Header-icon' /> */}
          {/* <img alt="Icon" src={require(`../img/${iconUrl}`)}></img> */}
        {data.header.callback.text}</button>
      </div>
  );
}
