import {
  Link
} from "react-router-dom";

function Status404() {
  return (
    <div>
      <p>Sorry, the page you are looking for has not been found</p>
      <p><Link to="/">Return to Home Page</Link></p>
    </div>
  );
}

export default Status404;