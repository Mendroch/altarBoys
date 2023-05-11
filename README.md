# Ministranci

#### Application dedicated to altar boys from Skoczów

![Ministranci logo](https://github.com/Mendroch/altarBoys/blob/main/public/logo192.png)

## Features

- online broadcast
- announcements
- assists

## Setup

Clone this repository `git clone https://github.com/Mendroch/altarBoys.git`

Go into the repository `cd altarBoys`

Install dependencies `npm install`

Run the app `npm start`

## Build new version

Build project `npm run build`

Rename folder build -> www

Build Cordova project `cordova build android --release` or `cordova build ios --release`

## Fix statusbar color on Android 13+

Go to `\platforms\android\CordovaLib\src\org\apache\cordova\SplashScreenPlugin.java`

comment out the entire function `splashScreen.setOnExitAnimationListener`
