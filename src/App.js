import { Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import Main from './pages/Main';
import Biography from './pages/Biography';
import Characters from './pages/Characters';
import About from './pages/About';
import Contacts from './pages/Contacts';
import Layout from './components/Layout';
import NotFound from './pages/NotFound';

function App() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Main />} />
        <Route path="characters" element={<Characters />} />
        <Route path="characters/:id" element={<Biography />} />
        <Route path="about" element={<About />} />
        <Route path="contacts" element={<Contacts />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes >
  );
}

export default App;
