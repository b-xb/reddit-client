import './App.css';
import {
  Link,
  Routes,
  Route,
} from "react-router-dom";

import Home from '../Views/Home';
import Status404 from '../Views/Status404';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/*" element={<Status404 />} />
    </Routes>
  );
}

export default App;
