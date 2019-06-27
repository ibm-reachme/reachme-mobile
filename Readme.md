# ReachMe mobile App


## Pre Requisitess for your system
1. Install Git and Node
1. Install ionic and cordova globally using

    ```npm install -g ionic cordova```
1. Android Studio if you need the Android emulator. 
 Linux/MacOs: In case you get error for Java or Gradle not found, install Java 8 and latest version of Gradle.

## Clone the project in your system

```
 cd project_directory
 git clone https://github.com/ibm-reachme/reachme-mobile.git

```

## Local deployment on Browser
``` ionic serve ```

## Local deployment on Android Emulator
### Prepare project for android
``` ionic cordova prepare android ```

### Debug on emulator
``` ionic cordova run android -l ```