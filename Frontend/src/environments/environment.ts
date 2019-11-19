// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false , 
  firebase:{
    apiKey: "AIzaSyDQLub1Cg5CX96QBOKuYlB6lHLZrjl87xQ",
    authDomain: "easyfix-1569909233579.firebaseapp.com",
    databaseURL: "https://easyfix-1569909233579.firebaseio.com",
    projectId: "easyfix-1569909233579",
    storageBucket: "easyfix-1569909233579.appspot.com",
    messagingSenderId: "153951599089",
    appId: "1:153951599089:web:dda4072590350aa683ec50",
    measurementId: "G-0FSDFKW4GE"

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
