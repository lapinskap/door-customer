# door-custom
React application: views and routes by React Router and Reactstrap. Styled-components alongside SCSS, app written from scratch.

## Table of contents
* [General info](#general-info)
* [Screenshots](#screenshots)
* [Technologies](#technologies)
* [Setup](#setup)
* [Features](#features)
* [Status](#status)
* [Inspiration](#inspiration)
* [Contact](#contact)

## General info

Views of the application used to check the quality of given website. Views were written using reactstrap and `styled-components`.
Backend is practically unaffected (at the present time).
I would like to write it some day - with Node or Ruby on Rails.


## Screenshots
![Example screenshot]()

## Technologies
* React - Javascript library
* yarn
* React Router
* styled-components

## Setup

You need to have yarn or npm installed on your computer. I prefer yarn:

```
$ cd door-custom/
$ yarn
$ yarn run build
$ yarn run start
```

## Code Examples

Here are scripts you can run with this application. Type `yarn run` + script-name in your terminal. 

```javascript
"scripts": {
    "build-scss": "node-sass-chokidar --include-path ./src --include-path ./node_modules src/ -o src/",
    "watch-scss": "npm run build-scss && node-sass-chokidar --include-path ./src --include-path ./node_modules src/ -o src/ --watch --recursive",
    "start-js": "react-scripts start",
    "start": "npm-run-all -p watch-scss start-js",
    "build": "npm run build-scss && react-scripts build",
    "test": "react-scripts test --env=jsdom",
    "eject": "react-scripts eject"
  }
```
`stateless functional component` and usage of Reactstrap + styled-components. A container that does not have to exist in a separate file, but if it already exists, it's easy to paste it into readme!

```javascript
import React from "react";
import "../Bootstrap.css";
import styled from "styled-components";

const MainTemplate = ({ children }) => {
  return (
      <HeaderText>
        {children}
      </HeaderText>
  );
};

const HeaderText = styled.div`
  color: #7387a9;
  font-weight: 600;
  padding: 8px 0px 0px 15px;
  font-size: 15px;
`;

export default MainTemplate;
```

## Features
List of features ready and TODOs for future development
* styled-components 
* reactstrap (similar to bootstrap)
* Awesome views!

To-do list:
* Add Redux 
* Add connection with API?

## Status
Project is: 

Frontend: _in  progress_



## Inspiration
Project based on some interesting recrutiment task. 

## Contact
Created by [@lapinskap](https://www.linkedin.com/in/lapinskap/) - feel free to contact me!
