import React from 'react';

function App() {
  return (
    <div className="header">
      <img src="/header.svg" alt="Header" className="header-icon" />
      <button onClick={() => window.location.href = 'https://schmid-koenig.de/impressum-n/'}>
        Impressum
      </button>
    </div>
  );
}

export default App;