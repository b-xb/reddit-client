import './App.css';
import {
  Link,
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
      <Route path="/" element={<div><h1>Home</h1></div>} />
      <Route path="/*" element={
        <div>
          <p>Sorry, the page you are looking for has not been found</p>
          <p><Link to="/">Return to Home Page</Link></p>
        </div>
      } />
    </Routes>
  );
}

export default App;
