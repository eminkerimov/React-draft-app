import { Route } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Dialogs from './component/Dialogs/Dialogs';
import Header from './component/Header/Header';
import Navbar from './component/Navbar/Navbar';
import Profile from './component/Profile/Profile';

const App = () => {
  return (
    <BrowserRouter>
      <div className="app">
        <Header />
        <Navbar />
        <div className="app-content">
          <Route path='/profile' component={Profile} />
          <Route path='/dialogs' component={Dialogs} />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
