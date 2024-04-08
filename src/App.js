import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Routes,Route } from 'react-router-dom';
import Home from './page/Home/Home';
import Movies from './page/Movies/Movies';
import AppLayout from './layout/AppLayout';
import NotFound from './page/NotFound/NotFound';



function App() {
  return (
    <Routes>
      <Route path='/' element={<AppLayout />}>
        <Route index element={<Home />}/>
        <Route path='movies' element={<Movies />}/>
      </Route>
      <Route path='*' element={<NotFound />} />
    </Routes>
  );
}

export default App;
