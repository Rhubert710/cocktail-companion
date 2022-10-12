import './LoginModal.css';
import { useState } from 'react';


function LoginModal() {
    
  const [ loginText, setLognText] = useState('Login');

  const changeLoginType = () => {

    document.querySelector('#loginType_div').innerText = loginText;
    setLognText( loginText == 'Login' ? 'Create Account' : 'Login')

  };

  return (

            <div id='login-modal'>

              <h1 style={{}}>{loginText}</h1>

              <div className='login-input-title'>username:</div>
              <input type="text" id="username_input" className="login-input"/>
              <div className='login-input-title'>password</div>
              <input type="text" id="password_input" className="login-input"/>

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

                
                >
                  {loginText}
              </button>

            </div>

            )
        }

export default LoginModal