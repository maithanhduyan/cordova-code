# cordova-code
Mobile apps with HTML, CSS &amp; JS.  Target multiple platforms with one code base.  Free and open source


### [Cordova](https://cordova.apache.org/)

> npm install -g cordova

### 1. MyApp
> cordova create MyApp
> cd MyApp 
For Browser
> cordova platform add browser
> cordova run browser
Release:
>cordova build browser --release

For Android
> cordova platform add android

### 2. 2048 Game
> cordova create 2048
> cd 2048
> cordova platform add android
> cordova plugin add cordova-plugin-battery-status
> cordova emulate android | cordova build android