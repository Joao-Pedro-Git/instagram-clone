import './App.css';
import { db } from './firebase';
import { useEffect, useState } from 'react';
import Header from './Header'
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from './firebase';

function App() {
  const [user, setUser] = useState('');

  useEffect(() => {
    console.log(db)
  }, [])

  return (
    <div className="App">
      {/* Passando a função setUser como prop para Header */}
      <Header user={user} setUser={setUser}></Header>
    </div>
  );
}

export default App;
