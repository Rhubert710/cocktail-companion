import React from 'react'


let letter ='A';

function DrinkListItem(d) {
    const {drink} = d;
  return (

            <div className='a-card' style={{display:'flex'}}>

                <img className='drink-img' src={drink.strDrinkThumb} alt="drink.strDrink" 
                    style={{width:'19vmin', 'aspectRatio':'1'}}/>

                <div className='drink-name'>{drink.strDrink}</div>

            </div>

            )
        }

export default DrinkListItem