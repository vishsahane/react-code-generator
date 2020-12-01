
import React from 'react'

const ContactUs = () => {
  return (
    <div>
      <form name="contact-us" style={{
        padding: '40px', border: '1px solid #eee',
        width: '200px', margin: '0 auto'
      }}>
        <input type="text" id="name" placeholder="Your Name" style={{ width:'100%','margin-bottom': '10px' }} />
        <input type="email" id="email" placeholder="Email" style={{ width:'100%','margin-bottom': '10px' }} />
        <textarea id="message" placeholder="Message" rows="5" style={{ width:'100%','margin-bottom': '10px' }} />
        <button type="submit">Submit</button>
      </form>
    </div>
  )
}

export default ContactUs