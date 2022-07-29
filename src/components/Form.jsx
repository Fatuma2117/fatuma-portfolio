import "./Form.css"

import React from 'react'

export const Form = () => {
  return (
    <div className="form">
      
        <form>
          <h1>Let's Chat!</h1>
            <label> Your Name</label>
            <input type="text"></input>
            <label>Email</label>
            <input type="email"></input>
            <label>Subject</label>
            <input tpe="text"></input>
            <label>Message</label>
            <textarea rows={6} placeholder=" Type Your Message Here"/>
            <button className="btn">Submit</button>
        </form>
        </div>
  )
}
