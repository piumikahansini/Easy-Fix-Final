// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false , 
  firebase:{
    apiKey: "AIzaSyBSAOkOKC0TvYyIoqJEKTy7zq6NlrzxtiA",
    authDomain: "easy-fix-c79b1.firebaseapp.com",
    databaseURL: "https://easy-fix-c79b1.firebaseio.com",
    projectId: "easy-fix-c79b1",
    storageBucket: "easy-fix-c79b1.appspot.com",
    messagingSenderId: "366982971278",
    appId: "1:366982971278:web:7645ff434fa8c4cb262edf",
    measurementId: "G-KKFFFNK6GE"

  }
  // Initialize Cloud Firestore through Firebase
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
