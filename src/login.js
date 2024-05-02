import React, { useState} from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom';
import useAuth from './context/useAuth';
import { API_BASE_URL } from './apiConfig';


export const Login = () => {
    const {setAuth} = useAuth();
   

    const [email, setEmail] = useState('');    
    const [password, setPassword]= useState('');


    const handleSubmit = async (e) => {
        e.preventDefault();
        const formData ={
            Email: email,   
            Password: password 
        }
       try {
        const response = await axios.post(`${API_BASE_URL}Account/login`, formData,
        JSON.stringify({email , password}),
        {
            headers: {'Content-Type': 'application/json'},
            withCredentials: true
        }
                

    );
    
        console.log(JSON.stringify(response?.data))
        const accessToken = response?.data?.accessToken;
        const roles = response?.data.roles;
        setAuth({email, password, roles, accessToken, isAuthenticated: true});
       
     
       } catch (error) {
       
       }
       
        
    }
    

    
  return (
    <div className='d-flex justify-content-center align-items-center vh-100 '>
    <div className='p-3 rounded w-25 border'>


        <h2>  Login  </h2>
        <form onSubmit={handleSubmit} className='box '>
            <div className='mb-3'>
                <label htmlFor='email'><strong>Email:</strong></label>
                <input 
                type='text' 
                name='email' 
               
                autoComplete='off' 
                placeholder='Enter your email' 
                onChange={(e) => setEmail(e.target.value)} 
                className='form-control rounded-0'
                value={email}
                required
                />                
            </div>

            <div className='mb-3'>
                <label htmlFor='password'><strong>Password:</strong></label>
                <input 
                type='password'
                 name='password'                
                 placeholder='Enter your password'                 
                onChange={(e) => setPassword(e.target.value)} 
                className='form-control rounded-0'
                value={password}
                required
                />
            </div>

            <button className='btn btn-outline-secondary w-100 rounded-20 mb-2' >Log In</button>

        <p> 
         Need an Account?<br/>
        <span className="line">
        <Link to="/signup">Sign up</Link>
        </span>
        </p>
           
            <div className='mb-2'>
                <input type='checkbox' name='tickbox' id='tick' className='me-1'/>
                <label htmlFor='password'> Remember me </label>

            </div>
        </form>
        
    </div>    
    </div>
  )
}

export default Login;