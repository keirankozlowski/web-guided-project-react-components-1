import React from "react";
import { render } from "react-dom";

import { Playground, Playplace } from './components/Playground';

// Rules when we make new components with React
// Name has to be capitalized
// must return SOMETHING
// can only return ONE element
// we have some built in elements with base functionality
// attribute names with dashes are camelCased
// curly braces for JS

// Rules for USING React components
// components are utilized (invoked) to get back elements
// don't forget tags
function App(props) {
  const { cohort, instructor, happinessLevel, week } = props;
  console.log(props);

  return (
    <div className="container">
      <h1>Welcome to React, {cohort}! From your instructor {instructor}</h1>
      <p>This is week {week} of React!</p>
      { happinessLevel > 9000 ? <p>I am very happy!</p> : <p>I'm less happy. :(</p> }
      <Playground />
    </div>
  );
}

render(
  <App cohort='webpt24' instructor='Keiran' happinessLevel={9001} week={1} />,
  document.querySelector("#root")
);
