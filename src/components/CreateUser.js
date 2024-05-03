// @ts-nocheck
import React from "react";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function ListUser() {
  const navigate = useNavigate();

  const [inputs, setInputs] = useState([]);

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
  };
  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      axios
        .post("http://localhost/soapAPI/soap/save", inputs)
        .then(function (response) {
          // console.log(response.data);
          navigate("/");
        });
    } catch (error) {
      console.log("create error", error);
    }
  };
  return (
    <div>
      <h1>Create user</h1>
      <form onSubmit={handleSubmit}>
        <table cellSpacing="10">
          <tbody>
            <tr>
              <th>
                <label>Title: </label>
              </th>
              <td>
                <input type="text" name="title" onChange={handleChange} />
              </td>
            </tr>
            <tr>
              <th>
                <label>Description: </label>
              </th>
              <td>
                <input type="text" name="description" onChange={handleChange} />
              </td>
            </tr>
            <tr>
              <th>
                <label>Price: </label>
              </th>
              <td>
                <input type="text" name="price" onChange={handleChange} />
              </td>
            </tr>
            <tr>
              <th>
                <label>url: </label>
              </th>
              <td>
                <input type="text" name="url" onChange={handleChange} />
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
