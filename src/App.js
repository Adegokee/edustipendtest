
import './App.css';
import Eventhandling from './components/Eventhandling';
import Interation from './components/Interation';
import Notification from './components/Notification';
import Notify from './components/Notify';

function App() {
  return (
    <div className="App">
   <div>
   <Notification />
    <Notify />
   </div>

    <div>
      <Interation />
      <Eventhandling />
    </div>


    </div>
  );
}

export default App;
