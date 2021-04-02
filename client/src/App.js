
import './App.css';
import { Switch,Route } from "react-router-dom";
import Header from './components/layout/Header/Hedar';
import Footer from "./components/layout/Footer/footer";
import Home from './components/Home/Home';
import Login from './components/Login';
import Register from './components/Register'


function App() {
  return (
    <div className="App">
      <Header/>
     <Switch>
            <Route path='/' exact component={Home}/>
            <Route path='/login' exact component={Login}/>
            <Route path='/register' exact component={Register}/>
     </Switch>
     <Footer />
    </div>
  );
}

export default App;
