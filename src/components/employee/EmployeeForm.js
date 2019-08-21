import React, { Component } from 'react';
import { Form, Divider } from 'semantic-ui-react';

class EmployeeForm extends Component {
  state = {
    id: this.props.updatedEmployee.id,
    firstName: this.props.updatedEmployee.firstName,
    lastName: this.props.updatedEmployee.lastName,
    email: this.props.updatedEmployee.email,
    phone: this.props.updatedEmployee.phone
  }

  handleChange = (e) => {
    const { name, value } = e.target
    this.setState({ [name]: value })
  }

  handleSubmit = (e) => {
    e.preventDefault();
    //call add function
    if (this.props.updatedEmployee.id) {
      this.props.update(this.state)
    } else {
      this.props.add(this.state)
    }

    //clear out form 
    this.setState({ id: '', firstName: '', lastName: '', email: '', phone: '' })
  }

  componentDidUpdate(nextProps) {
    if (nextProps.updatedEmployee.email !== this.props.updatedEmployee.email) {
      this.setState({
        id: this.props.updatedEmployee.id,
        firstName: this.props.updatedEmployee.firstName,
        lastName: this.props.updatedEmployee.lastName,
        email: this.props.updatedEmployee.email,
        phone: this.props.updatedEmployee.phone
      })
    }
  }

  render() {
    const { firstName, lastName, phone, email } = this.state;
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