# Make a like twitch app

### Install app

  ```sh
  # In root
  npm install
  ```
  ### Run app

  ```sh
  # Start frontend dev server (auto-reload)
  # this will start both servers
  npm run start
  ```
  ### clean file

  ```sh
  # Calls script that generates from randomuser.me
  npm run clean
  ```

  ### To build 

  ```sh
  # Builds into a dist directory
  # cloud server should be built and change localhost to cloud domain
  npm run build
  ```

### Navigation
  1. react-router
    - core navigation library
  2. react-router-dom
    - this is for dom-based apps
  3. react-router-native
    - this is for react native apps
  4. react-router-redux
    - for bindings between redux and react

### Oauth
1. Google
```
  USER BROWSER
  1. user clicks to login with google
  2. we use google's JS lib to initiate OAuth process
  GOOGLE'S SERVER
  3. Google's JS lib makes auth request to google
  4. google displays confirmation screen to user in popup window
  5. user accepts
  6. popup window closes
  USER BROWSER
  7. Goodls's JS lib invokes a callback in our app
  8. callback provided with 'authorization' token and profile info for user
```
- SetUp of Google Oauth
  ```
    1. create a new project at "console.developers.google.com/"
    2. set up an ouath confirmation screen
    3. generate an oauth client ID
    4. install google's API library, initialize it with the ouath client ID
      4b. in the .html page, add a script tag in the <head>..</head>
      <script src="https://apis.google.com/js/api.js"></script>
    5. make sure the lib gets called any time the user clicks on the 'LOGIN with google' button
  ```
2. AWS 
3. Local

### Form submissions
 * redux forms
  1. it basically takes your input information, upon submitting, it automates the action creator and 
    mapstateTOprops process of storing and fetching data from redux store.
  2. redux-form is like the connect function
  3. A redux Field does not know how to show a text, dropdown, checkbox, etc. It only knows how to wrap
    inputs and other properties to the redux store.
### CRUD operations - create, read, update, delete

### Handling errors