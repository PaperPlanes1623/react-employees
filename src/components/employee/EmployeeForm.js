import React, { Component } from 'react';
import { Form } from 'semantic-ui-react';

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
      <Form onSubmit={this.handleSubmit}>
        <Form.Input
          label="First Name"
          required
          name="firstName"
          value={firstName}
          onChange={this.handleChange}
        />
        <Form.Input
          label="Last Name"
          required
          name="lastName"
          value={lastName}
          onChange={this.handleChange}
        />
        <Form.Input
          label="E-Mail"
          required
          name="email"
          value={email}
          onChange={this.handleChange}
        />
        <Form.Input
          label="Phone Number"
          required
          name="phone"
          value={phone}
          onChange={this.handleChange}
        />
        <Form.Button color="blue">Submit</Form.Button>
      </Form>
    )
  }
}

export default EmployeeForm;