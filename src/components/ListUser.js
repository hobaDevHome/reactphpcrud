// @ts-nocheck
import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function ListUser() {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    getUsers();
  }, []);

  function getUsers() {
    axios.get("http://localhost/soapAPI/products/").then(function (response) {
      // console.log(response.data);
      setUsers(response.data);
    });
  }

  const deleteUser = (id) => {
    axios
      .delete(`http://localhost/soapAPI/soap/${id}/delete`)
      .then(function (response) {
        // console.log(response.data);
        getUsers();
      });
  };

  return (
    <div>
      <h1>List Users</h1>

      <table>
        <thead>
          <tr>
            <th>#</th>
            <th>Title</th>
            <th>Description</th>
            <th>Price</th>
            <th>Actions</th>
            <th>Image</th>
          </tr>
        </thead>
        <tbody>
          {users ? (
            users.map((soap, key) => (
              <tr key={key}>
                <td>{soap.id}</td>
                <td>{soap.title}</td>
                <td>{soap.description}</td>
                <td>{soap.price}</td>
                <td>
                  <img src={soap.url} alt="" style={{ width: 200 }} />
                </td>
                <td>
                  <Link
                    to={`soap/${soap.id}/edit`}
                    style={{ marginRight: "10px" }}
                  >
                    Edit
                  </Link>
                  <button onClick={() => deleteUser(soap.id)}>Delete</button>
                </td>
              </tr>
            ))
          ) : (
            <h1>no data yet to delete</h1>
          )}
        </tbody>
      </table>
    </div>
  );
}
