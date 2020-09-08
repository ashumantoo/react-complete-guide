import React from 'react'

function Hero({ heroName }) {
  if (heroName === 'Joker') {
    throw new Error('Not a hero');
  }
  return (
    <div>
      <h4>{heroName}</h4>
    </div>
  )
}

export default Hero
