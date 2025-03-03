import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate for redirection
import axios from 'axios';

const CreateTask = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const navigate = useNavigate(); // For redirecting to login

  const handleSubmit = async (e) => {
    e.preventDefault();

    const postData = {
      title,
      description,
    };

    try {
      const response = await axios.post('http://localhost:8080/posts', postData, {
        withCredentials: true, // Send the HttpOnly cookie for authentication
      });
      console.log('Post created:', response.data);
      setError('');
      setSuccess('Task created successfully!');
      // Reset form
      setTitle('');
      setDescription('');
    } catch (err) {
      console.error('Error creating task:', err.response?.data || err.message);
      if (err.response?.status === 401) {
        // Token expired or missing
        setError('Session expired. Redirecting to login...');
        setSuccess('');
        setTimeout(() => {
          navigate('/'); // Redirect to login page
        }, 2000);
      } else {
        setError('Failed to create task: ' + (err.response?.data || err.message));
        setSuccess('');
      }
    }
  };

  return (
    <div className="p-5 bg-[#1c1c1c] mt-5 rounded">
      {error && <p className="text-red-500 mb-4">{error}</p>}
      {success && <p className="text-green-500 mb-4">{success}</p>}
      <form onSubmit={handleSubmit} className="flex flex-wrap w-full items-start justify-between">
        <div className="w-1/2">
          <div>
            <h3 className="text-sm text-gray-300 mb-0.5">Task Title</h3>
            <input
              className="text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4 text-white"
              type="text"
              placeholder="Make a UI Design"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
            />
          </div>
        </div>

        <div className="w-2/5 flex flex-col items-start">
          <h3 className="text-sm text-gray-300 mb-0.5">Task Description</h3>
          <textarea
            className="w-full h-44 text-sm py-2 px-4 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4 text-white"
            cols="30"
            rows="10"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          ></textarea>
          <button
            type="submit"
            className="bg-emerald-500 py-3 hover:bg-emerald-600 px-5 rounded text-sm mt-4 w-full"
          >
            Create Task
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreateTask;