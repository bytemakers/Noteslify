import React, { useState } from 'react'
import './NewsLetter.css'

const NewsLetter = () => {
    const [ email , setEmail ] = useState('');
  return (
    <section className='news-section'>
      <iframe src="https://airtable.com/embed/shrUwGnyLnDvLvBoJ?backgroundColor=purple" width="100%" height="473"></iframe>
    </section>
  )
}
export default NewsLetter
