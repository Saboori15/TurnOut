import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyD6hP8W2j3sMUFXQwfhD_XeUgcfwLBLTAk",
    authDomain: "turnout-d1402.firebaseapp.com",
    databaseURL: "https://turnout-d1402.firebaseio.com",
    projectId: "turnout-d1402",
    storageBucket: "turnout-d1402.appspot.com",
    messagingSenderId: "795262928636",
    appId: "1:795262928636:web:9dc34fefa2fddb70583979",
    measurementId: "G-WJGVF088WR"
  };
 
  export const firebaseApp=firebase.initializeApp(firebaseConfig);
  export const eventsRef=firebaseApp.database().ref().child('events')
  firebase.analytics();