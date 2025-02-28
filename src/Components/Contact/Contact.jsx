import React from 'react'
import './Contact.css'
import msg_icon from '../../assets/msg-icon.png'
import mail_icon from '../../assets/mail-icon.png'
import phone_icon from '../../assets/phone-icon.png'
import location_icon from '../../assets/location-icon.png'

const Contact = () => {
    const [result, setResult] = React.useState("");

    const onSubmit = async (event) => {
      event.preventDefault();
      setResult("Sending....");
      const formData = new FormData(event.target);
  
      formData.append("access_key", "e12c8e3e-f2df-49bc-9c5d-3d8b2af3639e");
  
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });
  
      const data = await response.json();
  
      if (data.success) {
        setResult("Form Submitted Successfully");
        event.target.reset();
      } else {
        console.log("Error", data);
        setResult(data.message);
      }
    };

  return (
    <div className='contact'>
        <div className="contact-col">
            <h3>Send Us A Message <img src={msg_icon} alt="" /></h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio possimus consequatur sequi vero! Modi deleniti earum sunt est harum consequuntur necessitatibus, corrupti commodi ad aliquam fuga ipsa illo iusto recusandae.</p>
            <ul>
                <li><img src={mail_icon} alt="" />contact@versity.com</li>
                <li><img src={phone_icon} alt="" />123-456-7890</li>
                <li><img src={location_icon} alt="" />No 1, Address Street, City</li>
            </ul>
        </div>
        <div className="contact-col">
            <form onSubmit={onSubmit}>
                <label>Your Name</label>
                <input type="text" name='name' placeholder='Enter Your Name' required />
                <label>Your Number</label>
                <input type="tel" name='phone' placeholder='Enter Your Mobile Number' required />
                <label>Write Your Messages Here</label>
                <textarea name="message" rows="6" placeholder='Enter Your Message Here' required></textarea>
                <button type='submit' className='btn dark-btn'>Submit Now</button>
            </form>
            <span>{result}</span>
        </div>
      
    </div>
  )
}

export default Contact
