#   Timelapse

### A Cordova Project for McGill McHacks 2015

A mobile application that aids in scrap booking memories by reminding the user to take pictures periodically. 

It then compiles the pictures into a slideshow to view later.

![Timelapse example](/www/img/disaster.gif?raw=true "Timelapse example")

##  Technologies

* [Cordova](http://cordova.apache.org/)
* [Node.js](http://nodejs.org/)
* [jQuery](http://jquery.com/)
* [Bootstrap](http://getbootstrap.com/)
* [HTML5](http://www.w3schools.com/html/html5_intro.asp)
* [Emacs](http://www.gnu.org/software/emacs/)
* [Vim](http://www.vim.org/)

##  Install instructions

First install cordova and node/npm, then:

```

git clone git@github.com:jipson7/mchacks-cordova.git

```

```

cd mchacks-cordova/

```

```

cordova platform add ios android

```

Note for deploying ios on a simulator, you will also need to perform

```

npm install -g ios-sim ios-deploy

```

##  Add plugins:

We will just use the device plugin for now and can add the other ones to this command as needed. So run that command below.

```

cordova plugin add org.apache.cordova.camera org.apache.cordova.device org.apache.cordova.dialogs org.apache.cordova.file org.apache.cordova.file-transfer org.apache.cordova.device
cordova plugin add https://github.com/katzer/cordova-plugin-local-notifications.git && cordova prepare

```

Other plugins include (but may not be limited too)

if you add one to the command above. Delete it from this list. Please test both android and ios before doing this.

```
* org.apache.cordova.network-information
* org.apache.cordova.battery-status
* org.apache.cordova.device-motion
* org.apache.cordova.device-orientation
* org.apache.cordova.geolocation
* org.apache.cordova.camera
* org.apache.cordova.media
* org.apache.cordova.media-capture
* org.apache.cordova.file
* org.apache.cordova.file-transfer
* org.apache.cordova.dialogs
* org.apache.cordova.vibration
* org.apache.cordova.contacts
* org.apache.cordova.globalization
* org.apache.cordova.splashscreen
* org.apache.cordova.inappbrowser
* org.apache.cordova.console
```


##  Then to run:

```

cordova run ios

```

For testing on android it is suggested to use a device. Simply plug the device in and run

```

cordova run android

```

both of these commands will perform the build and launch in one step


```

##License

This software is licensed under the Apache 2 license, quoted below.

Licensed under the Apache License, Version 2.0 (the "License"); you may not use this project except in compliance with
the License. You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0.

Unless required by applicable law or agreed to in writing, software distributed under the License is distributed on an
"AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the License for the specific
language governing permissions and limitations under the License
