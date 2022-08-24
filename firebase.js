// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getStorage } from 'firebase/storage'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.local,
  authDomain: 'twitter-clone-a64e0.firebaseapp.com',
  projectId: 'twitter-clone-a64e0',
  storageBucket: 'twitter-clone-a64e0.appspot.com',
  messagingSenderId: '955457436280',
  appId: '1:955457436280:web:7f7c1c2121858b4d158b8d',
}

// Initialize Firebase

const app = !getApp().length ? initializeApp(firebaseConfig) : getApp()

const db = getFirestore()

const storage = getStorage()

export { app, db, storage }
