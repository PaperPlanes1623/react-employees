import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class EditForm extends Component {

  state = { firstName: '', lastName: '', phone: '', email: '' };

  componentDidMount() {
    if (this.props.id)
      this.setState({
        firstName: this.props.firstName, lastName: this.props.lastName,
        phone: this.props.phone, email: this.props.email
      })
  }

  handleSubmit = (e) => {
    e.preventDefault();
    if (this.props.id) {
      this.props.edit({ id: this.props.id, ...this.state });
      this.props.toggleEdit()
    }

    this.setState({ firstName: '', lastName: '', phone: '', email: '' })
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value })
  }

  render() {
    return (
      <>
        <h1><strong>Edit Employee</strong></h1>
        <form onSubmit={this.handleSubmit}>
          <input
            placeholder="firstName"
            name="firstName"
            value={this.state.firstName}
            onChange={this.handleChange}
          /><br /><br />
          <input
            placeholder="lastName"
            name="lastName"
            value={this.state.lastName}
            onChange={this.handleChange}
          /><br /><br />
          <input
            placeholder="phone"
            name="phone"
            value={this.state.phone}
            onChange={this.handleChange}
          /><br /><br />
          <input
            placeholder="email"
            name="email"
            value={this.state.email}
            onChange={this.handleChange}
          /><br /><br />
          <Link to='/'>
            <input type="Submit" />
          </Link>
        </form>

      </>
    )
  }
}

export default EditForm;