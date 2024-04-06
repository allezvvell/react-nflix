import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes,Route } from 'react-router-dom';
import Home from './page/Home/Home';
import Browse from './page/Browse/Browse';
import Movies from './page/Movies/Movies';
import AppLayout from './layout/AppLayout';
import NotFound from './page/NotFound/NotFound';
import { Navigate } from "react-router-dom";
import { useSelector } from 'react-redux';



function App() {
  const isLogin = useSelector(state => state.main.isLogin)
  return (
    <Routes>
      <Route path='/' element={<Home />}/>
      <Route path='/browse' element={isLogin?<AppLayout />:<Navigate to='/'/>}>
        <Route index element={<Browse />}/>
        <Route path='movies' element={<Movies />}/>
      </Route>
      <Route path='*' element={<NotFound />} />
    </Routes>
  );
}

export default App;
