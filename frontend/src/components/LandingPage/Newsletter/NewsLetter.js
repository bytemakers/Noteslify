import React, { useState } from 'react'
import './NewsLetter.css'

const NewsLetter = () => {
    const [ email , setEmail ] = useState('');
  return (
    <section className='news-section'>
        <div className='flex'>
            <h2>Subscribe to our newsletter</h2>
                <input type = "email" value = {email} name = "email" onChange = {(e)=> {setEmail(e.target.value)}}/>
                <button>Subscribe</button>
             <p>Know more about us You won’t be dissapointed!</p>
        </div>
    </section>
  )
}
export default NewsLetter
