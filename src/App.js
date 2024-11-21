import './App.css';
import { useEffect, useState } from 'react';
import Header from './Header';
import { getAuth } from './firebase'

function App() {
  const [user, setUser] = useState('');

  useEffect(() => {
    console.log("Usuário no App:", user);
  }, [user]);

  return (
    <div className="App">
      <Header user={user} setUser={setUser} />
    </div>
  );
}

export default App;
