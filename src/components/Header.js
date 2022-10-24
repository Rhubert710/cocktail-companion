import React from 'react'



function Header(props) {
    const {user} = props;
  return (

            <div className='header' style={{width:'99%', display:'flex'}}>

                <div id='loginText_div'
                    style={{margin:'8px', 'marginLeft':'auto', cursor:'pointer'}}

                    onClick={() => {
                        document.querySelector('#login-modal').style.display = 'flex';
                    
                    }}
                >
                    
                        { user ? 'userName' : 'login / sign-up'}
                </div>

            </div>

            )
        }

export default Header