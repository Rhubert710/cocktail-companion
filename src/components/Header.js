import React from 'react'



function Header(props) {
    const {user} = props;
  return (

            <div className='header' style={{width:'99%', display:'flex'}}>

                <div 
                    style={{margin:'8px', 'marginLeft':'auto', cursor:'pointer'}}

                    onClick={() => {
                        document.querySelector('#loginModal').style.display = 'block'
                    
                    }}
                >
                    
                        { user ? 'userName' : 'login / sign-up'}
                </div>

            </div>

            )
        }

export default Header