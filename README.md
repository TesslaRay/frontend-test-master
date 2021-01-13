# Cornershop Frontend Test

#### ⚠️ Before you begin

> Create a new git repository on the root of this folder, upload it to Github, and invite [@mcarafie](https://github.com/mcarafie) and [@cornershop-hr](https://github.com/cornershop-hr) as collaborators.

## Overview

You have been commissioned to implement a counter application following the design specs provided [here](https://www.figma.com/file/6CnuM0Gj9oiwi2AV9vXLRH/Counters-for-the-web?node-id=0%3A1).

The application consists of several screens where each screen has one or multiple states that you will have to implement following the design specs the best you can.

We have provided starter boilerplate so you can write your application without any hassle and also a NodeJS dummy backend with all the neccessary endpoints to persist your data.

For bootstrapping the frontend application we're using `react-scripts`, so as you might have guessed you **must** use React (it's our primary view layer for frontend applications here at Cornershop).

> Note: This is NOT a backend test. Don't make it require any databases. Don't touch the server folder. Just leave it as it is.

## Requirements

Your submission will be evaluated considering the following criterias:

- Good implementation of UI elements, both visually and at code level.
  - Extra points for writing custom styling code for UI elements.
  - Use whatever CSS flavor you want: plane old CSS, SASS, LESS, CSS-in-JS, CSS modules, everything is allowed.
- Good architecture and software design.
  - _Hint:_ Usage of design patterns, good code organization, separation of concerns, etc. 
- Use of best practices when writing code.
  - _Hint:_ Idiomatic & readable code, good use of composition, DRY, etc.
- The application must persist data back to the server.
- Feature completion (all features must be implemented for a perfect score).
- Good management of state using built-in React features or third party dependencies (context, `redux`, `mobx`, `xstate` or whatever you might like).
- You must include tests.
  - Behavior tests are perfect.
- Your project must be self-contained (make sure you're not using global dependencies).
- We would love to understand your thought process, so writing a little summary of your choices, what you did and how you solved the test is required (write it here on this README file).

Please consider that we expect your solution to be production-ready. In other words, that millions of users would be thrilled to use your product.

> Note: You can use whatever dependencies/libraries you want, the only requirement dependency-wise is to use React.

## Getting started

First and foremost, make sure you have `node` and `npm` (or `yarn`) installed on your machine, then run:

```bash
$ npm install
$ npm start
```

For `yarn` users:

```bash
$ yarn
$ yarn start
```

## API endpoints / examples

Since the backend API runs locally on a different port (`3001`) than the `react-scripts` dev server (`3000`), we have setup a proxy so you don't have to do anything special to consume the API (fetching data from `/api/v1/counter` will do).

> The following endpoints are expecting a `Content-Type: application/json` header.

#### **GET** `/api/v1/counter`.

_Fetch a list of counters._
```javascript
/* Response */
[]
```

#### **POST** `/api/v1/counter`.

_Adds a counter._

```javascript
/* Body */
{ title: "bob" }

/* Response */
{ id: "asdf", title: "bob", count: 0 }
```

#### **POST** `/api/v1/counter/inc`
_Increments the value of a counter._
```javascript
/* Body */
{ id: "asdf" }

/* Response */
{ id: "asdf", title: "bob", count: 1 }
```

#### **POST** `/api/v1/counter/dec`
_Decrements the value of a counter._

```javascript
/* Body */
{ id: "asdf" }

/* Response */
{ id: "asdf", title: "bob", count: 0 }
```

#### **DELETE** `/api/v1/counter`
_Deletes a counter._

```javascript
/* Body */
{ id: "qwer" }

/* Response */
"qwer" // The id of the deleted counter
```
---

Good luck! 🎉

We hope your submission is… to die for.

![Coffin dance](coffin.gif)

## Diary of work from Cristian Valdivia

<p align="center">
 <a href="https://test-cornershop-dot-cristian-valdivia.ue.r.appspot.com/"><img src="src/images/logo-test.svg"width="100"></a>
</p>

<p align="center">The <i>demo</i> is <a href='https://test-cornershop-dot-cristian-valdivia.ue.r.appspot.com/'>HERE</a></br>This demo will be running until December 31, 2021 12:00 PM GMT-3<br /></p>

<hr>

I'm so excited to do this test. On my first day, I study the test and try to think about what approach to use.

At first and after talking about it with friends I try to use TDD, but since I never took the test at React, this option was eliminated.  After that and with my mind more relaxed, I start with the more basic components as I noticed that some components like the search bar and the add button appear in almost all views. After that I program the  welcome screen and main screen. Tomorrow I will finish almost all the views and start with the functionality.

After 2 days of work I have an MVP. It´s not perfect but works. To improve the use of the application I deploy the app in GCP and ability CI with Githubs Actions. I send the link [here](https://test-cornershop-dot-cristian-valdivia.ue.r.appspot.com/) to some friends and family. It´s weird. Only two discover some bugs. Some told me it was perfect but have a lot of bugs. I have noticed that I have to take some considerations from UX that are not clear in Figma.

I used **Jest** with **redux-mock-store** to make some simple and general behavioral tests in test actions.

I use **@testing-library/react** combined with **@testing-library/jest-dom** to test components. It´s a very simple use of these libraries:
### Components test:
  ```javascript
   <AddButton />
  ``` 
   Test if components its a button, fail it does not have a button. Fail with two buttons too. Only pass with one button

  ```javascript
   <AddError />
  ``` 
  Test if components its a button, fail it does not have a button. Fail with two buttons too. Only pass with one button

  ```javascript
   <SearchBar />
  ```
  Write Coke in input and test 

  ```javascript
   <CounterCell />
  ``` 
  Pass item and test if the render is correct. I try to test the increment of value when the user clicks on the plus button get with data-testid = "plus" but doesn´t work. I'm not sure it's because the state depends on the server or or if it's for something else.
  
I notice it´s a more simple test component when are stateless, but I don't have time to change the component to stateless  Probably this form it´s a good practice.

### Design desicions

The application has been developed with:
- **reactjs**: library to create user interfaces.
- **redux**: allows the management of states.
- **react-router**: facilitates the implementation of sections in a webapp through custom URL routes.
- **material-ui**: for the Icons and some prefined components.
- **jest**: for testing.

Some UX considerations:
  - When the user clicks save in Create Item Screen send to Main Screen.
  - When the user add example from Examples Screen send to Main Screen.
  - Add snackbar with messaged: Copied when the copy button in Main Screen (Share) its clicks.


