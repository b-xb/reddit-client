import logo from './logo.svg';
import './App.css';

import {
  Routes,
  Route,
} from "react-router-dom";

function App() {
  return (
  //   <BrowserRouter>
  //   <Routes>
  //     <Route path="/" element={<Home />} />
  //     <Route path="users/*" element={<Users />} />
  //   </Routes>
  // </BrowserRouter>
    <Routes>
      <Route path="/" element={<div>Home</div>} />
      <Route path="/*" element={<div>Sorry, the page you are looking for has not been found</div>} />
    </Routes>
  );
}

export default App;
