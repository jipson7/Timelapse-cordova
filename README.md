#   A Cordova Project for McHacks

>A Repo for McHacks2015 @ Mcgill

####To install and setup:

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

####To add plugins:

We will just use the device plugin for now and can add the other ones to this command as needed. So run that command below.

```

* cordova plugin add org.apache.cordova.device
* cordova plugin add https://github.com/katzer/cordova-plugin-local-notifications.git && cordova prepare

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


####Then to run:

```

cordova run ios

```

For testing on android it is suggested to use a device. Simply plug the device in and run

```

cordova run android

```

both of these commands will perform the build and launch in one step


```

```
cordova plugin add org.apache.cordova.camera org.apache.cordova.device org.apache.cordova.dialogs org.apache.cordova.file org.apache.cordova.file-transfer
```
