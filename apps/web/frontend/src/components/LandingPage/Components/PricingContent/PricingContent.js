import React from 'react'
import './PricingContent.css'

const PricingContent = () => {
  return (
    <section className='pricingContent'>
      <h1>Noteslify Pricing</h1>
      <section>
        <div className='card'>
            <section>
            <h2>Free Open Source</h2>
            <p>$0</p>
            </section>
            <ul>
                <li>Lorem</li>
                <li>Lorem</li>
                <li>Lorem</li>
                <li>Lorem</li>
            </ul>
            <button>Use it</button>
        </div>
        <div className='card'>
        <section>
                
            <h2>Coming Soon</h2>
            <p>$12/month</p>
                </section>
            <ul>
                <li>Lorem</li>
                <li>Lorem</li>
                <li>Lorem</li>
                <li>Lorem</li>
            </ul>
            <button>Choose Plan</button>
        </div>
        <div className='card'>
            <section>  
                <h2>Enterprise</h2>
                <p>$100/year</p>
            </section>
            <ul>
                <li>Lorem</li>
                <li>Lorem</li>
                <li>Lorem</li>
                <li>Lorem</li>
            </ul>
            <button>Choose Plan</button>
        </div>
      </section>
    </section>
  )
}

export default PricingContent
