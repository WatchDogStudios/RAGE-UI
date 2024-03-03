import './App.css';
import logo from './assets/Gameface_white.png'
import wds from './assets/images/wds.png'
import { pm } from 'postmessage-polyfill';
import { fetch as fetchPolyfill } from 'whatwg-fetch';
import RGE from './core/components/rgecardcodepen'

const originalInterval = window.setInterval;
window.setInterval = function (callback, delay = 0) {
  return originalInterval(callback, delay);
}

window.postMessage = function (message) {
  pm({
    type: message.type,
    origin: 'http://127.0.0.1/:9000',
    target: window,
    data: message,
  });
};

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit src/App.js and save to reload.
        </p>
        <h1
          className="App-greeting"
        >
          Hello from Coherent Labs & WD Studios!
          <RGE
            title={"Soucles Base"}
            subcontent={"WD Studios"}
            image_user={wds}
            image_content={logo}
            likes="1030"
            comments="0"
            views="4304"
            />
        </h1>
      </header>

    </div>
  );
}

export default App;
