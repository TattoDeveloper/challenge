// eslint-disable-next-line @typescript-eslint/no-unused-vars
import './app.module.scss';
import { Route, Routes } from 'react-router-dom';
import { Home } from './pages/home/home';
import { Results } from './pages/results/results';
import { Details } from './pages/detail/detail';
import { Header } from '@meli-challenge/products/products-ui';
import meliLogo from '../assets/logo_meli.png'

export function App() {
  return (
     <>
      <Header logo={ meliLogo } />
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/items/*' >
          <Route index element={<Results />} />
          <Route path=':id' element={<Details/>} />
        </Route>
        <Route path='*' element={<p>No found</p>} />
      </Routes>
     </>
  );
}

export default App; 
