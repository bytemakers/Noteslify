import React from 'react'
import './Contact_form.css'
import contactImg from './Contact.png'
import { useForm, ValidationError } from '@formspree/react';

const Contact_form = () => {
  const [state, handleSubmit] = useForm("mrgdlnqk");
  if (state.succeeded) {
      return <p>Thanks for Contacting!! We'll be back to you soon.</p>;
  }
  return (
    <section className='contact-section Container flex'>
        <div className = "img-sec">
            <img src ={contactImg} alt = "contact"/>
        </div>
    <div >
       <div className="Contact-form">
           <h2>Contact Us</h2>
           <form onSubmit={handleSubmit}>
               <div>
               <input type="text" name = "name" placeholder ="Name"required/>
               <ValidationError 
                  prefix="Name" 
                  field="name"
                  errors={state.errors}
                />
            </div>
            
             <div>
                <input type="email" name = "email" placeholder ="Email" required/>
             </div>
                  <ValidationError 
                    prefix="Email" 
                    field="email"
                    errors={state.errors}
                  />
             <div>
                <textarea id="message" name="message" placeholder ="Message" row = "30" cols = "50"></textarea>
                <ValidationError 
                  prefix="Message" 
                  field="message"
                  errors={state.errors}
                />
             </div>
             <button type="submit" disabled={state.submitting}>Send</button>
           </form>
       </div>
    </div>
    </section>
  )
}

export default Contact_form
