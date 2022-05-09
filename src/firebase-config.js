/**
 * To find your Firebase config object:
 * 
 * 1. Go to your [Project settings in the Firebase console](https://console.firebase.google.com/project/_/settings/general/)
 * 2. In the "Your apps" card, select the nickname of the app for which you need a config object.
 * 3. Select Config from the Firebase SDK snippet pane.
 * 4. Copy the config object snippet, then add it here.
 */
const config = {
  apiKey: "AIzaSyCaOZ60LHBAAimIDauVvAWVJ-0BnBaLGNI",
  authDomain: "projektdyplom4.firebaseapp.com",
  projectId: "projektdyplom4",
  storageBucket: "projektdyplom4.appspot.com",
  messagingSenderId: "621938382395",
  appId: "1:621938382395:web:478db1ec0ea28aa415ae1e"
};

export function getFirebaseConfig() {
  if (!config || !config.apiKey) {
    throw new Error('No Firebase configuration object provided.' + '\n' +
    'Add your web app\'s configuration object to firebase-config.js');
  } else {
    return config;
  }
}