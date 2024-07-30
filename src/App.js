
import { Provider } from 'react-redux';
import './App.css';
import TypeHead from './TypeHead';
import store from './store';

function App() {
  return (
  
    <div className="App">
      <Provider store={store}>
      <TypeHead/>
      </Provider>
    </div>
  );
}

export default App;
