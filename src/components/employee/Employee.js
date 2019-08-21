import React from 'react';
import { Link } from 'react-router-dom';

const Employee = ({ id, firstName, lastName, email, phone, remove, edit, update }) => (
  <tr id={id}>
    <td>{id}</td>
    <td>{firstName}</td>
    <td>{lastName}</td>
    <td>{email}</td>
    <td>{phone}</td>
    <td>
      <button class="delete-btn" onClick={() => remove(id)}>
        <strong>Delete</strong>
      </button>
      <Link to="/edit">
        <button class="edit-btn" onClick={() => update(id)}>
          <strong>Edit</strong>
        </button>
      </Link>
    </td>
  </tr>
)

export default Employee;