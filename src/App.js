import './App.css';
import Lottie from 'react-lottie';
import 'react-phone-number-input/style.css'
import wa from "./lotties/whatsapp.json"
import wachat from "./lotties/wachat.json"
import hero from "./icons/wa-svg.svg"
import React, { useState } from 'react'
import 'react-phone-number-input/style.css'
import PhoneInput from 'react-phone-number-input'
import waIcon from "./icons/whatsapp.png"

const App = () => {

  const waOptions = {
    loop: true,
    autoplay: true,
    animationData: wachat,
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
          <img src= {waIcon} className='icon'/>
          <h4>SendWhatsappDirect</h4>
        </div>
      </div>

      <div className="section-main">
        <div className="section-text">
          <h2>Send Whatsapp Message Without Saving The Contact</h2>
          <small>Automatically open your Whatsapp application to compose a new message without saving the phone number.</small>

          {/* <img src= {hero} className="hero" /> */}

          <Lottie
          options={waOptions}
          height={450}
          width={550} />
        </div>

        <form onSubmit={submitHandler}>
          <label>Whatsapp Number</label>
          <PhoneInput
              placeholder= "Enter phone number"
              value={value}
              onChange={setValue} 
              defaultCountry="IN"
              className='input' />
          <a href= {"https://wa.me/"+ value } className="submit-btn" target="_blank">Send Message</a>
          
        </form>

        {/* <div className="display">https://wa.me/{value}</div> */}
      </div>
      <footer>
          <div>Developed by <a href= "https://hardikarora.netlify.app/">Hardik Arora</a>  </div>
        </footer>
    </div>
  )
}

export default App

