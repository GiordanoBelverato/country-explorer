import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Homepage from './pages/Homepage';
import CountryDetails from './pages/CountryDetails';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/country/:name" element={<CountryDetails />} />
      </Routes>
    </Router>
  );
};

export default App;