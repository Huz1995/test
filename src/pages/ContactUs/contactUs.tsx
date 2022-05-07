import React from 'react'
import './contactUs.scss'
import diagram from '../../assets/Img_Contact.png'

function ContactUs() {
  return (
    <div className='contactUsContainer'>
      <div className='contactUs'>
        <div className='form'>
          <p className='subTitle'>
            Contact us
          </p>
          <p className='mainTextEmph'>
            Populo facilisi nam no, dolor deleniti deseruisse ne cum, nam quodsi aliquam eligendi ne. Ferri
            euismod accusata te nec, summo accumsan at vix.
          </p>
          <div className='formRow'>
            <label className='mainText'>
              Name
              <input  type="text" name="name" />
            </label>
              <label className='mainText'>
              Email address
              <input type="text" name="name" />
            </label>  
          </div>      
        </div>
        <div className='diagram'>
          <img src={diagram} alt='cuimg'/>
        </div>
      </div>
    </div>
  )
}

export default ContactUs    