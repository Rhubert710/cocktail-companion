import React from 'react'


function SearchBar() {
  return (
    <input 

        type="text"

        style={{
          width:'80vw', 
          maxWidth:'44rem',
          height:'1.9rem',
          borderRadius:'19px',
          fontSize:'large',
          padding:'4px',
          paddingLeft:'8px'
        }}/>
  )
}

export default SearchBar