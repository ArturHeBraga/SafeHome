import Routes from './src/routes';
import 'react-native-gesture-handler';
import React, { useState, useEffect } from 'react';
import { initializeApp } from 'firebase/app';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut } from 'firebase/auth';





export default function App() {
  return (

    <Routes />
  );
};
