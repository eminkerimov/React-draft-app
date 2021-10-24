import { Route } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Dialogs from './component/Dialogs/Dialogs';
import Header from './component/Header/Header';
import Navbar from './component/Navbar/Navbar';
import Profile from './component/Profile/Profile';

const App = (props) => {
  return (
    <BrowserRouter>
      <div className="app">
        <Header />
        <Navbar />
        <div className="app-content">
          <Route path='/profile' render={ () => <Profile state={props.state.profilePage}/>} />
          <Route path='/dialogs' render={ () => <Dialogs state={props.state.dialogsPage}/>} />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
