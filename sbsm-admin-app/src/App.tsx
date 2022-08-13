import React, { useEffect, useState } from 'react';
// import logo from './logo.svg';
import './App.css';
import { GoogleSignIn } from './components/GoogleSignIn';

function App() {

  return (
    <div className="App">
      Hello World!
      <GoogleSignIn />
    </div>
  );
}

export default App;
