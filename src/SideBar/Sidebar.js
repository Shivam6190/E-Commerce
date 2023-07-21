import React from 'react';
import './Sidebar.css';
import Category from './Category';
import Price from './Price';
import Colors from './Colors'

export default function Sidebar({handleChange}) {
  console.log(handleChange)
  return (
  <>
  
  <section className='sidebar'>
    <div className="logo-container">
      <h1>🛒</h1>
    </div>
  
  <Category handleChange={handleChange}/>
  <Price handleChange={handleChange}/>
  <Colors handleChange={handleChange}/>


  
  </section>

 
  
  </>
  )
}
