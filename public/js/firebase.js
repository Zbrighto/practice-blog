let firebaseConfig = {
  // Enter your firebase credentials
  apiKey: "AIzaSyBTKip6Gsv97Vd7Jr-vmAmwjJosv-HKWvg",
  authDomain: "blogging-website-8c6e9.firebaseapp.com",
  projectId: "blogging-website-8c6e9",
  storageBucket: "blogging-website-8c6e9.appspot.com",
  messagingSenderId: "258702097097",
  appId: "1:258702097097:web:44df85635131bc15142b18"
};

firebase.initializeApp(firebaseConfig);

let db = firebase.firestore();