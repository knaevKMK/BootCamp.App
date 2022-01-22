import { Route,BrowserRouter, Routes } from 'react-router-dom';
import './App.css';
import './components/header/Header.js';
import Header from './components/header/Header.js';
import Footer from './components/footer/Footer.js';
import Login from './components/usr/Login.js';
import  Home  from './components/home/Home.js';
import Register from './components/usr/Register';


function setToken(userToken) {
    sessionStorage.setItem('token', JSON.stringify(userToken));
}

function getToken() {
    const tokenString = sessionStorage.getItem('token');
  const userToken = JSON.parse(tokenString);
    return userToken;
}

function App() {
    const token = getToken();

    //if (!token) {
    //    window.location.href = "/login"
    //    return;
    //}


    return (
        <div className="App">
            <BrowserRouter>
            <Header />
                <Routes>
                    <Route index element={<Home/>} />
                    <Route path="/login" element={<Login setToken={setToken}/>} />
                    <Route path="/register" element={<Register/>} />
                    
                </Routes>
            </BrowserRouter>
            <Footer />
        </div>
    );
}

export default App;
