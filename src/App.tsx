import UsersTable from './components/UsersTable';
import UserForm from './components/UserForm';
import {UsersProvider} from './context/UsersContext';
import {Routes, Route} from 'react-router-dom';

function App() {

  return (
    <UsersProvider>
      <div className="App">
      <Routes>
        <Route path="/" element={<UsersTable/>}/>
        <Route path="/user/:userId" element={<UserForm/>}/>
       
      </Routes>
      </div>
    </UsersProvider>
  );
}

export default App;
