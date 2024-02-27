import { Checkbox, FormControlLabel, TextField } from '@mui/material';
import {Link} from 'react-router-dom';
import React,{useEffect} from 'react';
import '../Assets/Login.css';

function Login() {
    useEffect(()=>{
        document.title='Login';
    })
  return (
    <>
    <div className='login_body'>
        <h1 className='login_title1'>IMS</h1>
        <h1 className='login_title2'>Inventory Management System</h1>
        <form>
            <div className='login_page'>
              <div className='login'>Login</div>
            <TextField id="standard-basic" label="UserName" variant="standard"/>
            <TextField id="standard-basic" label="Password" variant="standard" />
            <div>
                <FormControlLabel control={<Checkbox defaultChecked />} label="Remember me" />
                <a className='form_anchor' href='#'>Forgot password?</a>
            </div>
            <div>

            <button className='login_button'>Log In</button>
            </div>
            <div className='login_or'>Or</div>
            <div className='login_symbol'>
              <div className='login_symbol1'></div>
              <div className='login_symbol2'></div>
              <div className='login_symbol3'></div>
            </div>
            
            <p>Don't have an account?<span className='sign'> <Link to="/Signup">Sign up</Link></span></p>
          </div>
        </form>
    </div>
    </>
  )
}

export default Login