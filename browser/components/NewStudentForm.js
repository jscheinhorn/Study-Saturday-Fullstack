import React from 'react';

class NewStudentForm extends React.Component {
  constructor() {
    super()
    this.state = {

    }
  }
  render() {
      return (
    // TO MAKE FORM: USE FORM TAG AND LABEL YOUR INPUTS WITH htmlFor, THE INPUT NAME GOES WITHIN LABEL
    <form>
      <label htmlFor='firstName'>First Name:
      <input name="Firstname" value={} />
      </label>
      <label htmlFor='lastName'>Last Name: <input name="lastName" value={} /></label>
      <label htmlFor='email'>Email:       <input name="Email" value={}></input></label>
      <button type='submit'>Submit</button>
    </form>

  )
  }
}


export default NewStudentForm
