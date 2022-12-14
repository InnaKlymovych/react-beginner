import React from 'react';
import './index.scss';

function App() {

  const [open, setOpen] = React.useState(false);

  return (
    <div className="App">
      <button onClick ={() => setOpen(true)} className="open-modal-btn">✨ Open the window</button>
      {open && (
        <div className="overlay">
        <div className="modal">
          <svg onClick ={() => setOpen(false)} height="200" viewBox="0 0 200 200" width="200">
            <title />
            <path d="M114,100l49-49a9.9,9.9,0,0,0-14-14L100,86,51,37A9.9,9.9,0,0,0,37,51l49,49L37,149a9.9,9.9,0,0,0,14,14l49-49,49,49a9.9,9.9,0,0,0,14-14Z" />
          </svg>
          <img src="https://media0.giphy.com/media/hO58ejrIKFIkw/200w.webp?cid=ecf05e47dbjnglbe1mmaviezkwaq5yc3n87buej3f32k6m8c&rid=200w.webp&ct=g" />
        </div>
      </div> )
      }
    </div>
  );
}

export default App;
