import React, { useState } from 'react';
import axios from 'axios';
import { API_BASE_URL } from './apiConfig';

const Signup = () => {
  const [Email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');


  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData ={
        Email: Email,   
        Password: password 
    }
   try {
    const response = await axios.post(`${API_BASE_URL}Account/register`, formData,
    JSON.stringify({Email , password}),
    {
        headers: {'Content-Type': 'application/json'},
        withCredentials: true
    }
            

);

    console.log(response.data);
    console.log(response.accessToken);
    console.log(JSON.stringify(response))
    
   
 
   } catch (error) {
   
   }
   
    
}

  return (
    <div>
      <h2>Sign up</h2>
      {error && <p>{error}</p>}
      <form onSubmit={handleSubmit}>
        <div>
          <label>Email:</label>
          <input type="text" value={Email} onChange={(e) => setEmail(e.target.value)} />
        </div>
        <div>
          <label>Password:</label>
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </div>
        <button type="submit">Sign up</button>
      </form>
    </div>
  );
};

export default Signup;
