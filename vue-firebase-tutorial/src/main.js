import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { initializeApp } from "firebase/app";
//import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyDXyDf9qAHQ-Tk2fyI6a6iA-w-QY25R4VY",
  authDomain: "vue-firebase-tutorial-b6532.firebaseapp.com",
  projectId: "vue-firebase-tutorial-b6532",
  storageBucket: "vue-firebase-tutorial-b6532.appspot.com",
  messagingSenderId: "334704397756",
  appId: "1:334704397756:web:b0e0dc6813c12f0533afb9",
  measurementId: "G-55XCERZX3M"
};

// Initialize Firebase
initializeApp(firebaseConfig);
//const app = initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);

createApp(App).use(router).mount('#app')
