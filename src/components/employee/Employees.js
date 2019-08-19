import React from 'react';
import { Table } from 'semantic-ui-react';
import Employee from './Employee';

const Employees = ({ employees, remove }) => (
  <Table celled padded>
    <Table.Header>
      <Table.Row>
        <Table.HeaderCell>First Name</Table.HeaderCell>
        <Table.HeaderCell>Last Name</Table.HeaderCell>
        <Table.HeaderCell>Email</Table.HeaderCell>
        <Table.HeaderCell>Phone</Table.HeaderCell>
        <Table.HeaderCell>Options</Table.HeaderCell>
      </Table.Row>
    </Table.Header>
    <Table.Body>
      {
        employees.map(employee => (
          <Employee key={employee.id} {...employee} remove={remove} />
        ))
      }
    </Table.Body>
  </Table>
)

export default Employees;