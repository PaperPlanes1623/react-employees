import React, { Component } from 'react';
import { Form, Divider } from 'semantic-ui-react';

class EmployeeForm extends Component {
  state = { firstName: '', lastName: '', email: '', phone: '' }

  handleChange = (e) => {
    const { name, value } = e.target
    this.setState({ [name]: value })
  }

  handleSubmit = (e) => {
    e.preventDefault();
    //call add function
    const { add } = this.props
    add(this.state)
    //clear out form 
    this.setState({ firstName: '', lastName: '', email: '', phone: '' })
  }

  render() {
    const { firstName, lastName, phone, email } = this.state
    return (
      <div class="form">
        <form onSubmit={this.handleSubmit}>
          <div class="form-head">
            <Divider horizontal>New Employee</Divider>
          </div>
          <input
            placeholder="First Name"
            required
            name="firstName"
            value={firstName}
            onChange={this.handleChange}
          /><br /><br />
          <input
            placeholder="Last Name"
            required
            name="lastName"
            value={lastName}
            onChange={this.handleChange}
          /><br /><br />
          <input
            placeholder="E-Mail"
            required
            name="email"
            value={email}
            onChange={this.handleChange}
          /><br /><br />
          <input
            placeholder="Phone Number"
            required
            name="phone"
            value={phone}
            onChange={this.handleChange}
          /><br /><br />
          <button class="submit-btn"><strong>Submit</strong></button>
          <br />
        </form>
      </div>
    )
  }
}

export default EmployeeForm;