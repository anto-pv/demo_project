import Header from './components/header';
import logo from './images/logo.png';
import './style/App.scss';

function App() {
  return (
    <div className="App">
      <Header/>
      <div className="body">
        <img src={logo} alt="React-App-Base"/>
        Hi buduyjjj
        dfsdgsafg
      </div>
    </div>
  );
}

export default App;
