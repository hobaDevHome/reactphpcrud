// @ts-nocheck
import React from "react";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function AddSoap() {
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
        .post("https://sql112.infinityfree.com/soapAPI/soap/save", inputs)
        .then(function (response) {
          // console.log(response.data);
          navigate("/dashboard");
        });
    } catch (error) {
      console.log("create error", error);
    }
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div class="border-b border-gray-900/10 pb-12 pl-5">
          <h2
            class=" font-semibold leading-7 text-gray-900 text-3xl mt-4"
            style={{ fontFamily: "Freeman" }}
          >
            Add a new product
          </h2>
          <div class="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
            <div class="sm:col-span-4">
              <label
                for="title"
                class="block text-sm font-medium leading-6 text-gray-900"
              >
                Title
              </label>
              <div class="mt-2">
                <div class="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                  <input
                    type="text"
                    name="title"
                    id="title"
                    autocomplete="product title"
                    class="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                    placeholder=""
                    onChange={handleChange}
                  />
                </div>

                <div class="col-span-full">
                  <label
                    for="description"
                    class="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Description
                  </label>
                  <div class="mt-2">
                    <textarea
                      onChange={handleChange}
                      id="description"
                      name="description"
                      rows="3"
                      class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    ></textarea>
                  </div>
                </div>
                <label
                  for="price"
                  class="block text-sm font-medium leading-6 text-gray-900"
                >
                  Price
                </label>
                <div class="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                  <input
                    type="text"
                    name="price"
                    id="price"
                    onChange={handleChange}
                    autocomplete="price"
                    class="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                  />
                </div>
                <label
                  for="url"
                  class="block text-sm font-medium leading-6 text-gray-900"
                >
                  URL
                </label>
                <div class="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                  <input
                    type="text"
                    name="url"
                    id="url"
                    onChange={handleChange}
                    autocomplete="url"
                    class="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="mt-6 flex items-center justify-end gap-x-6">
          <button
            type="submit"
            class="mb-4 rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Save
          </button>
        </div>
      </form>
    </div>
  );
}
