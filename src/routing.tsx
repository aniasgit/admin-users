import {Routes, Route} from 'react-router-dom';
import UsersTable from './components/UsersTable';
import UserForm from './components/UserForm';

export const AppRoutes = () => (
    <Routes>
        <Route path="/" element={<UsersTable/>}/>
        <Route path="/user/:userId" element={<UserForm/>}/>
    </Routes>
)
