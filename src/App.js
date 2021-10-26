import { Route } from 'react-router';
import './App.css';
import Dialogs from './component/Dialogs/Dialogs';
import Header from './component/Header/Header';
import Navbar from './component/Navbar/Navbar';
import Profile from './component/Profile/Profile';

const App = (props) => {
  return (
      <div className="app">
        <Header />
        <Navbar />
        <div className="app-content">
          <Route path='/profile' render={ () => <Profile profilePage={props.state.profilePage} addPost={props.addPost}/>} />
          <Route path='/dialogs' render={ () => <Dialogs state={props.state.dialogsPage}/>} />
        </div>
      </div>
  );
}

export default App;
