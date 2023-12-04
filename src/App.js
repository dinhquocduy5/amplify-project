import logo from './logo.svg';
import { Amplify } from 'aws-amplify';
import amplifyconfig from './amplifyconfiguration.json';

import './App.css';

Amplify.configure(amplifyconfig);
function App() {
  return (
    <div className="App">
      Hello world~~!
    </div>
  );
}

export default App;
