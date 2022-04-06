import { useState } from 'react';
import QRCode from 'react-qr-code';
import './App.css';

function App() {

  const [link, setLink] = useState('');

  return (
    <div className="app__container">
      <h2>QR-Code Application</h2>
      <input onChange={e => setLink(e.target.value)} type="text" placeholder="Enter a link for QR-Code" className="app__input" />
      <div className="app_qrcode">
        <QRCode value={link} />
      </div>
    </div>
  );
}

export default App;
