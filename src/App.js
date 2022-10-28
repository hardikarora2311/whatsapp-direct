import './App.css';
import Lottie from 'react-lottie';
import wa from "./lotties/whatsapp.json"
import React, { useState } from 'react'
import 'react-phone-number-input/style.css'
import PhoneInput from 'react-phone-number-input'

const App = () => {

  const waOptions = {
    loop: true,
    autoplay: true,
    animationData: wa,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice"
    }
  };

  const [value, setValue] = useState()
  const [showDisplay, setShowDisplay]= useState("none")

  const submitHandler= (e) =>{
    e.preventDefault();
    setShowDisplay("block")

  }

  return (
    <div className="app">
      <div className="navbar">
        <div className="nav-heading">
          <h4>SendWhatsappDirect</h4>
        </div>
      </div>

      <div className="section-main">
        <div className="section-text">
          <h2>Send Whatsapp Message Without Saving The Contact</h2>
          <small>Automatically open your Whatsapp application to compose a new message without saving the phone number.</small>
          <Lottie
          options={waOptions}
          height={200}
          width={200} />
        </div>

        <form onSubmit={submitHandler}>
          <PhoneInput
              placeholder= "Enter phone number"
              value={value}
              onChange={setValue} 
              defaultCountry="IN" />
          <a href= {"https://wa.me/"+ value } className="submit-btn" target="_blank">Send Message</a>
          
        </form>

        <div className="display">https://wa.me/{value}</div>
      </div>
    </div>
  )
}

export default App

