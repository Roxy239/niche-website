
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Footer from './Pages/Shared/Footer/Footer';
import Header from './Pages/Shared/Header/Header';
import Watches from './Pages/Home/Watches/Watches';

function App() {
  return (
    <div className="App">
      <Router>
        <Header></Header>
      </Router>
      <Router>
        <Watches></Watches>
      </Router>
      <Router>
        <Footer></Footer>
      </Router>
    </div>
  );
}

export default App;
