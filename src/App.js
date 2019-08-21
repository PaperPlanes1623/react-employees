import React, { Component } from 'react';
import Employees from './components/employee/Employees';
import EmployeeForm from './components/employee/EmployeeForm';
import index from './styles/index.scss';


class App extends Component {
  state = {
    employees: [
      { id: 1, firstName: 'Bob', lastName: 'Jones', email: 'bob@email.com', phone: '801-555-5555' },
      { id: 2, firstName: 'John', lastName: 'Doe', email: 'john@email.com', phone: '801-655-5555' },
      { id: 3, firstName: 'Mary', lastName: 'Jane', email: 'mary@email.com', phone: '801-755-5555' }
    ],
    updatedEmployee: '',
  }

  toggleEdit = () => this.setState({ editing: !this.state.editing });

  editEmployee = (employeeData) => {
    const employees = this.state.employees.map(employee => {
      if (employee.id === employeeData.id)
        return employeeData;
      return employee
    });
    this.setState({ employees })
  }

  updateEmployee = (id) => {
    const employees = this.state.employees.filter(employee => employee.id === id);
    this.setState({ updatedEmployee: employees[0] })
  }

  getId = () => {
    // create unique id's
    return Math.floor((1 + Math.random()) * 0x10000)
      .toString(16)
      .substring(1);
  };

  addEmployee = (employeeData) => {
    let newEmployee = { id: this.getId(), ...employeeData }
    this.setState({ employees: [newEmployee, ...this.state.employees] })
  }

  removeEmployee = (id) => {
    const employees = this.state.employees.filter(employee => {
      if (employee.id !== id)
        return employee
    })
    this.setState({ employees: [...employees] })
  }

  render() {
    const { employees } = this.state
    return (
      <>
        <div class="head">
          Employee Management System
        </div>
        <EmployeeForm add={this.addEmployee} update={this.editEmployee} updatedEmployee={this.state.updatedEmployee} />
        <div class="emp-header">
          All Employees
        </div>
        <Employees employees={employees} remove={this.removeEmployee} update={this.updateEmployee} edit={this.toggleEdit} />
      </>
    )
  }
}




export default App;
