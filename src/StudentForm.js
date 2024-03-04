import React, { useState } from 'react';
import axios from 'axios';

const StudentForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    picture: null,
    resume: null,
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFileChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.files[0] });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formDataToSend = new FormData();
    formDataToSend.append('name', formData.name);
    formDataToSend.append('email', formData.email);
    formDataToSend.append('picture', formData.picture);
    formDataToSend.append('resume', formData.resume);

    try {
      const response = await axios.post('http://localhost:5000/register', formDataToSend);
      console.log(response.data);
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input type="text" name="name" onChange={handleChange} />
      </label>
      <br />
      <label>
        Email:
        <input type="text" name="email" onChange={handleChange} />
      </label>
      <br />
      <label>
        Picture:
        <input type="file" name="picture" onChange={handleFileChange} />
      </label>
      <br />
      <label>
        Resume:
        <input type="file" name="resume" onChange={handleFileChange} />
      </label>
      <br />
      <button type="submit">Submit</button>
    </form>
  );
};

export default StudentForm;
