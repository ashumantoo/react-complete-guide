import React from 'react'
import Hero from './Hero'
import ErrorBoundaries from './ErrorBoundaries'

function HeroParentComp() {
  return (
    <div>
      <ErrorBoundaries>
        <Hero heroName={'Batman'} />
      </ErrorBoundaries>
      <ErrorBoundaries>
        <Hero heroName={'Supeman'} />
      </ErrorBoundaries>
      <ErrorBoundaries>
        <Hero heroName={'Joker'} />
      </ErrorBoundaries>
    </div >
  )
}

export default HeroParentComp
