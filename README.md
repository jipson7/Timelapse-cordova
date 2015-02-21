#   A Cordova Project for McHacks

A Repo for McHacks2015 @ Mcgill

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

####Then to run:

```

cordova run ios

```

For testing on android it is suggested to use a device. Simply plug the device in and run

```

cordova run android

```

both of these commands will perform the build and launch in one step


