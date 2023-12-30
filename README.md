This is a new [**React Native**](https://reactnative.dev) project, bootstrapped using [`@react-native-community/cli`](https://github.com/react-native-community/cli).

# Getting Started

>**Note**: Make sure you have completed the [React Native - Environment Setup](https://reactnative.dev/docs/environment-setup) instructions till "Creating a new application" step, before proceeding.

## Step 1: Start the Metro Server

First, you will need to start **Metro**, the JavaScript _bundler_ that ships _with_ React Native.

To start Metro, run the following command from the _root_ of your React Native project:

```bash
# using npm
npm start

# OR using Yarn
yarn start
```

## Step 2: Start your Application

Let Metro Bundler run in its _own_ terminal. Open a _new_ terminal from the _root_ of your React Native project. Run the following command to start your _Android_ or _iOS_ app:

### For Android

```bash
# using npm
npm run android

# OR using Yarn
yarn android
```

### For iOS

```bash
# using npm
npm run ios

# OR using Yarn
yarn ios
```

If everything is set up _correctly_, you should see your new app running in your _Android Emulator_ or _iOS Simulator_ shortly provided you have set up your emulator/simulator correctly.

This is one way to run your app — you can also run it directly from within Android Studio and Xcode respectively.

## Step 3: Modifying your App

Now that you have successfully run the app, let's modify it.

1. Open `App.tsx` in your text editor of choice and edit some lines.
2. For **Android**: Press the <kbd>R</kbd> key twice or select **"Reload"** from the **Developer Menu** (<kbd>Ctrl</kbd> + <kbd>M</kbd> (on Window and Linux) or <kbd>Cmd ⌘</kbd> + <kbd>M</kbd> (on macOS)) to see your changes!

   For **iOS**: Hit <kbd>Cmd ⌘</kbd> + <kbd>R</kbd> in your iOS Simulator to reload the app and see your changes!

## Congratulations! :tada:

You've successfully run and modified your React Native App. :partying_face:

# Challenge

Art Institute Of Chicago Catalog App

We want to build a mobile application that allows a user to navigate the catalog of artworks exposed by the Art Institute of Chicago API.

Documentation | Art Institute of Chicago API

The user should be able to see a thumbnail and a small description of each artwork in the main screen of the app. When clicking on a thumbnail the user must be sent to a detailed screen of the artwork containing a better quality image and more detailed information about the piece, the author, and any other data you consider might be relevant for the end user. The user should be able to save some favorite artworks, and should be able to explore them even after the application is completely closed and reopened.

NOTES:
You should use animated transitions and any other cool feature you consider will show up how experienced you are in mobile development.

Your solution will be evaluated on code quality, clarity and development best practices.

Build the application using React Native CLI and Typescript.

Additional bonus if you implement some kind of push notifications.

Please share with us the link of the repository containing the application source code when finished and let us know to schedule the meeting to review the app.

Feel free to ping us any question you might have about this technical assessment.