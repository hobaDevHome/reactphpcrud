// @ts-nocheck
import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

export default function ListUser() {
  const navigate = useNavigate();

  const [inputs, setInputs] = useState([]);

  const { id } = useParams();

  useEffect(() => {
    getUser();
  }, []);

  function getUser() {
    axios.get(`http://localhost/soapAPI/soap/${id}`).then(function (response) {
      // console.log(response.data);
      setInputs(response.data);
    });
  }

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
  };
  const handleSubmit = (event) => {
    event.preventDefault();

    axios
      .put(`http://localhost/soapAPI/soap/${id}/edit`, inputs)
      .then(function (response) {
        // console.log(response.data);
        navigate("/");
      });
  };

  return (
    <div>
      <h1>Edit user</h1>
      <form onSubmit={handleSubmit}>
        <table cellSpacing="10">
          <tbody>
            <tr>
              <th>
                <label>Title: </label>
              </th>
              <td>
                <input
                  value={inputs.title}
                  type="text"
                  name="title"
                  onChange={handleChange}
                />
              </td>
            </tr>
            <tr>
              <th>
                <label>Description: </label>
              </th>
              <td>
                <input
                  value={inputs.description}
                  type="text"
                  name="description"
                  onChange={handleChange}
                />
              </td>
            </tr>
            <tr>
              <th>
                <label>Price: </label>
              </th>
              <td>
                <input
                  value={inputs.price}
                  type="text"
                  name="price"
                  onChange={handleChange}
                />
              </td>
            </tr>
            <tr>
              <th>
                <label>url: </label>
              </th>
              <td>
                <input
                  value={inputs.url}
                  type="text"
                  name="url"
                  onChange={handleChange}
                />
              </td>
            </tr>
            <tr>
              <td colSpan="2" align="right">
                <button>Save</button>
              </td>
            </tr>
          </tbody>
        </table>
      </form>
    </div>
  );
}
