import React from "react";
import Links from "./Links";

function About({ bio, github, linkedin }) {
  return React.createElement('div', null, 
    React.createElement('h2', null, 'About Me'),
    bio && React.createElement('p', null, bio),
    React.createElement(Links, { github: github, linkedin: linkedin })
  );
}

export default About;
