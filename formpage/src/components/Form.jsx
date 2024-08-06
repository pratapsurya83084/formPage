import React, { useState } from 'react';
import "@fortawesome/fontawesome-free/css/all.min.css";

const Form = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phoneNumber: '',
    country: '',
    jobRole: '',
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData({
      ...formData,
      [id]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Store form data in local storage
    localStorage.setItem('formData', JSON.stringify(formData));
    alert('Form submitted successfully!');
  };

  return (
    <div className="container mx-auto px-4 py-20 mb-20">
      <h2 className="text-2xl sm:text-3xl md:text-3xl lg:text-4xl font-bold mb-20 md:mb-20 text-center">
        Your Success Story Starts Here. Let's Write It Together
      </h2>
          <div className='text-center'>add form </div>
      {/* <form onSubmit={handleSubmit} className="max-w-lg mx-auto bg-white p-8 rounded-lg shadow-md">
        
        <div className="mb-6">
          <label htmlFor="fullName" className="block text-gray-700 font-bold mb-2">
            Your Full Name
          </label>
          <input
            id="fullName"
            type="text"
            className="w-full p-3 border border-gray-300 rounded"
            placeholder="Enter your name"
            value={formData.fullName}
            onChange={handleChange}
            required
          />
        </div>

       
        <div className="mb-6">
          <label htmlFor="email" className="block text-gray-700 font-bold mb-2">
            Your Email
          </label>
          <input
            id="email"
            type="email"
            className="w-full p-3 border border-gray-300 rounded"
            placeholder="Enter your email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>

        
        <div className="mb-6">
          <label htmlFor="phoneNumber" className="block text-gray-700 font-bold mb-2">
            Your Phone Number
          </label>
          <input
            id="phoneNumber"
            type="number"
            className="w-full p-3 border border-gray-300 rounded"
            placeholder="Enter your phone number"
            value={formData.phoneNumber}
            onChange={handleChange}
            required
          />
        </div>

       
        <div className="mb-6">
          <label htmlFor="country" className="block text-gray-700 font-bold mb-2">
            Select Country
          </label>
          <select
            id="country"
            className="w-full p-3 border border-gray-300 rounded"
            value={formData.country}
            onChange={handleChange}
            required
          >
            <option value="">Select your country</option>
            <option value="India">India</option>
            <option value="USA">USA</option>
            <option value="UK">UK</option>
            <option value="Canada">Canada</option>
            <option value="Australia">Australia</option>
           
          </select>
        </div>

       
        <div className="mb-6">
          <label htmlFor="jobRole" className="block text-gray-700 font-bold mb-2">
            Select Job Role
          </label>
          <select
            id="jobRole"
            className="w-full p-3 border border-gray-300 rounded"
            value={formData.jobRole}
            onChange={handleChange}
            required
          >
            <option value="">Select your job role</option>
            <option value="Developer">Developer</option>
            <option value="Designer">Designer</option>
            <option value="Manager">Manager</option>
            <option value="QA">QA</option>
            <option value="Other">Other</option>
            
          </select>
        </div>

       
        <div className="text-center">
          <button
            type="submit"
            className="w-full bg-cyan-500 hover:bg-cyan-600 text-white font-bold py-3 px-4 rounded"
          >
            Submit
          </button>
        </div>
      </form> */}

    </div>
  );
};

export default Form;
