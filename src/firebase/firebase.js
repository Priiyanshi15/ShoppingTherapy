import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDtn6nHhEmRwJTpl6E907S7dDBM4XlBcIM",
  authDomain: "shoppingtherapy-56da3.firebaseapp.com",
  projectId: "shoppingtherapy-56da3",
  storageBucket: "shoppingtherapy-56da3.firebasestorage.app",
  messagingSenderId: "419700665463",
  appId: "1:419700665463:web:9b2fb2b718dcc2c69aea72",
  measurementId: "G-5924VZGTR7"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app)

export {app, auth};