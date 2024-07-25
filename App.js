import './App.css';
import HeaderComponent from './components/Header';
import MyImageComponent from './components/Image';
import RegistrationForm from './components/RegistrationForm';

function App() {
  return (
    <div className="App">
      <div className="left-pane">
      <MyImageComponent/>
      </div>
      <div className="right-pane">
        <div>
        <HeaderComponent/>
        </div>
        <RegistrationForm />
      </div>
    </div>
  );
}

export default App;
