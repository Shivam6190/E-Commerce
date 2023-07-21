import React from 'react'
import './Price.css'
import Input from '../components/Input'

export default function Price({handleChange} ) {
  return (
    <div className='ml'>
      
      <h2 className='sidebar-title price-title'>Price</h2>

      <label className='sidebar-label-container'>
        <input onChange={handleChange}   type="radio" value='' name="test2"/>
        <span className='checkmark'></span>All
      </label>

      <Input
      handleChange={handleChange}
      value={50}
      title="Below ₹250"
      name="test2"
      />
      <Input
      handleChange={handleChange}
      value={100}
      title="₹250 - ₹500"
      name="test2"
      />
      <Input
      handleChange={handleChange}
      value={150}
      title="₹500 - ₹2000"
      name="test2"
      />
      <Input
      handleChange={handleChange}
      value={200}
      title="Above ₹2000"
      name="test2"
      />
    
    </div>
  )  
}

