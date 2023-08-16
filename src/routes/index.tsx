import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from '../views/Home';
import List from '../views/List';

const Rou = () => {
    return (
      <Router>
        <Routes>
          <Route exact path="/" element={<Home/>} />
          <Route path="/list" element={<List/>} />
        </Routes>
      </Router>
    );
  };

  export default Rou;