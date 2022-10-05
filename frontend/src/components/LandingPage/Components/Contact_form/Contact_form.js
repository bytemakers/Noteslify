import React from 'react'
import './Contact_form.css'

const Contact_form = () => {
  return (
    <section className='contact-section Container flex'>
        <div className = "img-sec">
            <img src ="assets/Contact.PNG" alt = "contact"/>
        </div>
    <div >
       <div className="Contact-form">
           <h2>Contact Us</h2>
           <form>
               <div>
               <input type="text" name = "name" placeholder ="Name"required/>
            </div>
            
             <div>
                <input type="email" name = "email" placeholder ="Email" required/>
             </div>
             <div>
                <textarea id = "qA-textBox" row = "30" cols = "50"></textarea>
             </div>
             <button>Send</button>
           </form>
       </div>
    </div>
    </section>
  )
}

export default Contact_form
