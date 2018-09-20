# Pulp-Native

## Running On Android
- Get android studio
- Create a virtual device (you may need to create any sort of project to get to this option. It's in the top right once you do)
- In the device list page under Actions on the right, run the virtual device
- In the terminal in the working directory: `npm run android`
-- Pull down from top to open notifications menu and hit refresh to refresh the app

## Running On iOS
- Get xcode, open it and install the things it tells you to
- In the terminal in the working directory: `npm run ios`
- Go to the second page and open the Expo app
- If you ever want to see the menu, `Command-D`
 
## Running In Expo
`npm run start`

## Debugging
`npm install -g react-devtools`

`react-devtools`

If you're not in a simulator then you also need to run the following in a command prompt:
 
 `adb reverse tcp:8097 tcp:8097`

## Adding Prettier
Prettier should install to your node_modules directory. I format my code on save. To do that in JetBrains IDEs, follow this guide: https://prettier.io/docs/en/webstorm.html#running-prettier-on-save-using-file-watcher

In the Program field, I wrote: `/Users/petergraham/Documents/Pulp/pulp-native/node_modules/prettier/bin-prettier.js`
