// eslint-disable-next-line @typescript-eslint/no-unused-vars
import styles from './app.module.scss';
import NxWelcome from './nx-welcome';

import { Route, Routes, Link } from 'react-router-dom';
import { Home } from './pages/home/home';

export function App() {
  return (
    <>
      <Home />
    </>
  );
}

export default App;
