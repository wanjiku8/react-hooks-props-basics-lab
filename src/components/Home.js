import React from "react";

function Home({ name, city }) {
  return React.createElement('div', null, 
    React.createElement('h1', null, name),
    React.createElement('p', null, 'City: ' + city)
  );
}

export default Home;
