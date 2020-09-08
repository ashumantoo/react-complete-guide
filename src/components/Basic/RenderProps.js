import React from 'react';
import Counter from './Counter';
import User from './User';
import ClickCounterTwo from './ClickCounterTwo';
import HoverCounterTwo from './HoverCounterTwo';

function RenderProps() {
  return (
    <div>
      {/*
      //  Passing render props as function

       <Counter render={(count, incrementCount) => (
        <ClickCounterTwo
          count={count}
          incrementCount={incrementCount}
        />
      )} />

      <Counter render={(count, incrementCount) => (
        <HoverCounterTwo
          count={count}
          incrementCount={incrementCount}
        />
      )} /> */}
      
      {/* Passing render props as child to the component */}
      <Counter>
        {(count, incrementCount) => (
          <ClickCounterTwo
            count={count}
            incrementCount={incrementCount}
          />
        )}
      </Counter>

      <Counter>
        {(count, incrementCount) => (
          <HoverCounterTwo
            count={count}
            incrementCount={incrementCount}
          />
        )}
      </Counter>

      {/* <ClickCounterTwo />
        <HoverCounterTwo /> */}
      {/* <User name={() => 'Ashutosh'} /> */}
      {/* <User name={(isLoggedIn) => isLoggedIn ? 'Ashutosh' : "Guest"} /> */}
      {/* <User render={(isLoggedIn) => isLoggedIn ? 'Ashutosh' : "Guest"} /> */}
    </div>
  )
}

export default RenderProps
