import './LoginModal.css';
import { useState } from 'react';


function LoginModal() {
    
  const [ loginText, setLognText] = useState('Login');

  const changeLoginType = () => {

    document.querySelector('#loginType_div').innerText = loginText;
    setLognText( loginText == 'Login' ? 'Create Account' : 'Login')

  };

  function setUser() {

    if (!document.querySelector('#username_input').value) return

    localStorage.setItem('userName',document.querySelector('#username_input').value)
    document.querySelector('#login-modal').style['display'] = 'none';

    document.querySelector('#loginText_div').innerHTML = `Logged in as <strong>${document.querySelector('#username_input').value}</strong>`
    
  }

  return (

            <div id='login-modal'>

              <h1> {loginText} </h1>

              <div className='login-input-title'>username:</div>
              <input type="text" id="username_input" className="login-input"/>
              <div className='login-input-title'>password</div>
              <input type="password" id="password_input" className="login-input"/>

              <div id='loginType_div'

                style={{
                  'alignSelf':'flex-end',
                  'marginRight':'10%',
                  color:'blue',
                  cursor:'pointer',
                  marginBottom:'29px'
                  }}

                  onClick = {()=>changeLoginType()}
                  
                >
                  Create Account
              </div>

              <button

                className='login-input'
                
                style={{
                  backgroundColor:'black',
                  color:'white'
                }}

                onClick = { ()=> setUser() }
                
                >
                  {loginText}
              </button>

            </div>

            )
        }

export default LoginModal