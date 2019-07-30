# door-custom
React application Styled-components, SCSS, app written from scratch using create-react-app.

## Table of contents
* [General info](#general-info)
* [Sample screenshots](#sample-screenshots)
* [Technologies](#technologies)
* [Setup](#setup)
* [Code examples](#code-examples)
* [More screenshots](#more-screenshots)
* [Features](#features)
* [Status](#status)
* [Inspiration](#inspiration)
* [Contact](#contact)

## General info

Cool platform for a company that produces custom tailored doors. 
Views were written using scss files and `styled-components`. 


## Sample screenshots
![login page](https://github.com/lapinskap/door-customer/blob/master/img/loginpage.jpg)
![door1](https://github.com/lapinskap/door-customer/blob/master/screens/door1.jpg)


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

## More Screenshots
![door2](https://github.com/lapinskap/door-customer/blob/master/screens/door2.jpg)
![door3](https://github.com/lapinskap/door-customer/blob/master/screens/door3.jpg)
![door4](https://github.com/lapinskap/door-customer/blob/master/screens/door4.jpg)
![door44](https://github.com/lapinskap/door-customer/blob/master/screens/door44.jpg)
![door6](https://github.com/lapinskap/door-customer/blob/master/screens/door6.jpg)
![door7](https://github.com/lapinskap/door-customer/blob/master/screens/door7.jpg)
![door8](https://github.com/lapinskap/door-customer/blob/master/screens/door8.jpg)

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
