# ionWeather
Demo app using Ionic Framework

## Setup

1. Clone the repo.
* Make sure you have **node.js** (and npm) installed.
* Install Ionic Framework and cordova by typing `npm install -g ionic cordova` in the console/command prompt.
* Make sure you have all dependencies to develop mobile apps of your flavour (iOS or Android) set up. See http://cordova.apache.org/docs/en/5.1.1/guide/platforms/index.html.
* Run `npm install` for both the app (the ionWeather folder) and the server (the weatherApi folder).
* To start a local server, run `node app` from within the **weatherApi** folder. This will start a local server at http://localhost:3000.
* In the **ionWeather/www/app**-folder, copy the **app.sample.config.js** file to **app.config.js**.
* Edit the values of the settings in the **app.config.js** file to match your own values for **API url** and **Google Maps API key**.
* To test out your app in a browser, run `ionic serve` from within the **ionWeather** folder.
* To add a platform to your project, run `ionic plaform add [ios|android]`. To add iOS support to your app, you need to be on OSX.
* To build your app, run `ionic build [ios|android]`
* To deploy your app to your phone, connect the phone using USB and run `ionic run [ios|android]`

## Available in the Google Play Store
https://play.google.com/store/apps/details?id=se.presis.wthr
