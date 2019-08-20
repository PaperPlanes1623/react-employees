import React from 'react';

const Employee = ({ id, firstName, lastName, email, phone, remove }) => (
  <tr id={id}>
    <td>{firstName}</td>
    <td>{lastName}</td>
    <td>{email}</td>
    <td>{phone}</td>
    <td>
      <button class="delete-btn" onClick={() => remove(id)}>
        <strong>Delete</strong>
      </button>
      <button class="edit-btn">
        <strong>Edit</strong>
      </button>
    </td>
  </tr>
)

export default Employee;