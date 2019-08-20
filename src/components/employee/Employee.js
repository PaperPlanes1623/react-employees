import React from 'react';

const Employee = ({ id, firstName, lastName, email, phone, remove }) => (
  <tr id={id}>
    <td>{firstName}</td>
    <td>{lastName}</td>
    <td>{email}</td>
    <td>{phone}</td>
    <td>
      <button onClick={() => remove(id)}>
        Delete Employee
    </button>
    </td>
  </tr>
)

export default Employee;