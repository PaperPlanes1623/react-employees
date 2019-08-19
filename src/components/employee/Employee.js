import React from 'react';
import { Button, Table } from 'semantic-ui-react';

const Employee = ({ id, firstName, lastName, email, phone, remove }) => (
  <Table.Row id={id}>
    <Table.Cell>{firstName}</Table.Cell>
    <Table.Cell>{lastName}</Table.Cell>
    <Table.Cell>{email}</Table.Cell>
    <Table.Cell>{phone}</Table.Cell>
    <Table.Cell>
      <Button color="blue" onClick={() => remove(id)}>
        Delete Employee
    </Button>
    </Table.Cell>
  </Table.Row>
)

export default Employee;