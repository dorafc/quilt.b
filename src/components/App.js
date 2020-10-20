import React from 'react';
import '../styles/App.css';
import Header from './Header'
import SettingsPanel from './SettingsPanel'
import QuiltSpace from './QuiltSpace'

function App() {
  return (
    <div className="App">
      <Header />
      <SettingsPanel />
      <QuiltSpace />
      <p>
        Beep boop
      </p>
    </div>
  );
}

export default App;
