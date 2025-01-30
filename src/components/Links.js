import React from "react";

function Links({ github, linkedin }) {
  return React.createElement('div', null, 
    React.createElement('h3', null, 'Links'),
    React.createElement('a', { href: github }, github),
    React.createElement('a', { href: linkedin }, linkedin)
  );
}

export default Links;
