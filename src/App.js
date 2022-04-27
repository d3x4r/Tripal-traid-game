import { Routes, Route } from 'react-router-dom';
import Main from './pages/Main';
import Biography from './pages/Biography';
import Characters from './pages/Characters';
import About from './pages/About';
import Contacts from './pages/Contacts';
import Layout from './components/Layout';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Main />} />
        <Route path="characters" element={<Characters />} />
        <Route path="characters/:id" element={<Biography />} />
        <Route path="about" element={<About />} />
        <Route path="contacts" element={<Contacts />} />
      </Route>
    </Routes >
  );
}

export default App;
