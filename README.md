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
Application written in React.
Views of the application used to check the quality of given website. Views were written using scss files and `styled-components`. 


## Screenshots
![Example screenshot]()

## Technologies
* React
* React Router
* styled-components
* Sass

## Setup

You need to have yarn or npm installed on your computer. Use following commands to get started:

```
$ cd door-custom/
$ npm install
$ npm run build
$ npm run start
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
a piece of code from SignIn component:

```javascript
        return(
            <AuthTemplate>
                <Title>Log in</Title>
                    <Form onSubmit={this.onSubmit}
                        render={({ handleSubmit, pristine, invalid }) => (
                            <form onSubmit={handleSubmit}>
                                <Field
                                    name="email"
                                    component={renderInput}
                                    type="text"
                                    placeholder="Email address"
                                    validate={composeValidators(required, email)}
                                />
                                <Field
                                    name="password"
                                    component={renderInput}
                                    type="password"
                                    placeholder="Password"
                                    validate={required}
                                />
                                <Field
                                    type="checkbox"
                                    name="tos"
                                    component={renderCheckbox}
                                    label="Keep me logged in"
                                />
                                <Footer>
                                    <Button color="primary" className="primary" onClick={this.toggle}>Login</Button>
                                </Footer>
                                <Info>
                                    <TextLink to={"/resetpassword"}>Forgot password?</TextLink>
                                    <TextLink to={"/signup"}>Sign up</TextLink>
                                </Info>
                            </form>
                         )}
                    />
            </AuthTemplate>
        );
```

## Features
List of features ready and TODOs for future development
* styled-components 
* reactstrap (similar to bootstrap)
* Moar awesome views!

To-do list:
* Add hosting
* write tests with Jest

## Status
Project is: _in  progress_



## Inspiration
Project based on some interesting recrutiment task. 

## Contact
Created by [@lapinskap](https://www.linkedin.com/in/lapinskap/) - feel free to contact me!
