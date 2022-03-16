import './App.css';
import Header from './Components/Header';
import Home from './Components/Home';
import { Routes, Route } from 'react-router-dom';
import Details from './Components/Details';

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/music/:id" element={<Details />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
