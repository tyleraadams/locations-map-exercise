# BentoBox Checkout Excercise

This exercise requires you to display 25 random BentoBox locations on a map in React.

Use whatever other tools you think are best to accomplish the requirements below (for example, local component state using `setState()`, Redux, MobX, etc).

We're primarily interested in seeing how you structure and implement a small JavaScript project so there is no requirement to spend a lot of time on styling (though it should be presentable). However, if CSS is your strength, feel free to make it beautiful! We estimate this should take somewhere between 2-3 hours to complete.

# Instructions

1.  Fork this repository.
2.  Install dependencies with `npm install` or `yarn`.
3.  Run `npm start` or `yarn start`. This should start a webpack dev server, and the app should be accessible at `http://localhost:8080/`
4.  When you're done, please open a pull request and send us an email letting us know you're dong.

If you have any problems getting the app started or dependencies installed, please let us know.

# Location Data

`src/helpers/api.js` contains the function `fetchLocations` which will fetch 25 random locations from BentoBox. It is currently called in `<App />`, but feel free to move it to whichever component you think makes the most sense.

# Requirements

1.  Based on the response from `fetchLocations()`, place corresponding pins on a map (use whatever mapping library you choose).

2.  Add tooltips that open when clicking a pin. The tooltip should contain the name and address of the location.

3.  When a user clicks on a tooltip, this should also display all the location data (e.g., name, address, an image, and hours (if present in response), etc.) somewhere else on the page.

# Optional

1.  If more than one image is returned by the API for a given location, display an image slider.
2.  Implement some type of undo/redo functionality to cycle through the previously selected locations.
