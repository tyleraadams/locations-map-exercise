# YUMMY RESTOS

Thank you for checking this out.

Before you get started, get an API key from google for maps (https://console.developers.google.com/apis/) and throw it in a `.credentials.json` file inside the `src` dir. You can use the `.example` file that's already checked in there as an example. You'll need to enable `Google Maps JavaScript API` and `Google Maps Geocoding API` for your key.

To get started, run `npm i` and `npm start` to start development mode.

I added eslint to webpack lint js.

For styles, I am using scss. I import all scss files from styles directory and components directory inside index.scss. If you have stylelint installed globally `npm i -g stylelint` you can run `styelint src/**/*.scss`. Settings are in .stylelintrc. If I had more time I would hook that up in webpack to automate.

For state, I chose to use component state. All application state lives on the App component, which then passes relevant props to its children. This is fine for a small project, but doesn't scale well. For a bigger project, I would tend to use Redux.

For the api, you'll notice the loading state is VERY slow. I explained in a comment inline in the code, but because of restrictions with Google Maps, I have to a) pass lat/lng data to markers to place them on the map, which means that b) I have to query GM's geocoding service, which rate limits aggressively-- I have to stagger those calls unfortunately-- and c) I have to wait for the google maps script to load before I begin to make those calls. This is not how I would build this for production (I would store lat lng data in the db.)

I chose to use react-google-maps library as a flexible React wrapper for google maps. It's a pretty cool project.

For the slider, I am using nuka-carousel. I won't use it again because of some bugs I found during this project (you'll see a comment I left about setting carousel dimensions), but it works well enough here.

Please reach out if you have any further questions for me. (I apologize in advance for making this one giant commit, I normally would it split up for the reviewer's benefit.) You can reach me at tyleraadams@gmail.com. Thanks again for reviewing, and I am looking forward to your feedback.

# ===ORIGNAL README===
# BentoBox Locations Map Excercise

This exercise requires you to display 25 random BentoBox locations on a map in React.

Use whatever other tools you think are best to accomplish the requirements below (for example, local component state using `setState()`, Redux, MobX, etc).

We're primarily interested in seeing how you structure and implement a small JavaScript project so there is no requirement to spend a lot of time on styling (though it should be presentable). However, if CSS is your strength, feel free to make it beautiful!

We estimate this exercise will take somewhere between 2-3 hours to complete. Please attempt to write modular, reusable code, where possible.

# Instructions

1.  Fork this repository.
2.  Install dependencies with `npm install` or `yarn`.
3.  Run `npm start` or `yarn start`. This should start a webpack dev server, and the app should be accessible at `http://localhost:8080/`
4.  When you're done, please open a pull request and send us an email letting us know you're done.

If you have any problems getting the app started or installing the dependencies, please let us know.

# Location Data

`src/helpers/api.js` contains the function `fetchLocations` which will fetch 25 random locations from BentoBox. It is currently called in `<App />`, but feel free to move it to whichever component you think makes the most sense.

# Requirements

1.  When `fetchLocations()` is called, display an indication to the user that the locations are loading (this could be a loader or a simple message).

2.  Based on the response from `fetchLocations()`, place corresponding pins on a map (use whatever mapping library you choose).

3.  Add tooltips that open when clicking a pin. The tooltip should contain the name and address of the location, as well as a button to "view details.""

4.  When a user clicks on "view details", this should display all the location data (e.g., name, address, an image, and hours if present in response, etc.) somewhere else on the page. For example, you could have the map on one side of the screen and the selected location details on the other, or you could display the details in a modal.

# Optional

1.  If more than one image is returned by the API for a given location, display an image slider.
2.  Implement undo/redo functionality to cycle through the previously selected locations.
