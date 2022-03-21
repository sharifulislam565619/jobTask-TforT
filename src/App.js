import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/pages/home/Home';
import Login from './components/pages/login/Login';
import SignUp from './components/pages/signUp/SignUp';
import AuthProvider from './contextAPI/AuthProvider';

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Login />} ></Route>
            <Route path='/home' element={<Home />} ></Route>
            <Route path='/signUp' element={<SignUp />} ></Route>
          </Routes>
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
