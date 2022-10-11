import './LoginModal.css';



function LoginModal() {
    
  return (

            <div id='login-modal'>

              <div className='login-input-title'>username:</div>
              <input type="text" id="username_input" className="login-input"/>
              <div className='login-input-title'>password</div>
              <input type="text" id="password_input" className="login-input"/>

            </div>

            )
        }

export default LoginModal