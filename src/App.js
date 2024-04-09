import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Routes,Route } from 'react-router-dom';
import Home from './page/Home/Home';
import Movies from './page/Movies/Movies';
import AppLayout from './layout/AppLayout';
import NotFound from './page/NotFound/NotFound';
import MovieDetail from './page/MovieDetail/MovieDetail'



function App() {
  return (
    <Routes>
      <Route path='/' element={<AppLayout />}>
        <Route index element={<Home />}/>
        <Route path='movies'>
          <Route index element={<Movies />}></Route>
          <Route path=':id' element={<MovieDetail />}></Route>
        </Route>
      </Route>
      <Route path='*' element={<NotFound />} />
    </Routes>
  );
}

export default App;
