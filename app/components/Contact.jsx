import React from "react";
import './contact.css'
const Contact = () => {
  return (
    <div className="contact">
      <form className="max-w-sm">
        <div className="mb-5 pt-10">
          <label
            for="Full Name"
            className=" block text-sm font-medium text-gray-900 dark:text-white"
          >
            Your Full Name
          </label>
          <input
            type="email"
            id="fullname"
            className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-sm focus:ring-blue-500 focus:border-blue-500 block w-[400px] p-2"
            placeholder="your full Name"
            required
          />
        </div>
        <div className="mb-5">
          <label
            for="your email address"
            className="block text-sm font-medium text-gray-900 dark:text-white"
          >
            Your Email Address
          </label>
          <input
            type="text"
            id="userName"
            className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-sm focus:ring-blue-500 focus:border-blue-500 block w-[400px] p-2.5"
            placeholder="your Email address"
            required
          />
        </div>
        <div className="mb-5">
          <label
            for="Enter message here"
            className="block text-sm font-medium text-gray-900 dark:text-white"
          >
            Enter a short message for us
          </label>
          <textarea 
            className=" w-[400px] shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-sm focus:ring-blue-500 focus:border-blue-500 block p-2.5"
            name=""
            id="textarea"
            cols="30"
            rows="10"
          ></textarea>
        </div>

        <button type="submit" className="text-white bg-[#DBBCA1] p-3 w-40 rounded-sm mb-10">
          submit
        </button>
      </form>
    </div>
  );
};

export default Contact;
