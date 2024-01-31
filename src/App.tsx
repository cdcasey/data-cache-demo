import { Link, Outlet } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <>
      <div id="sidebar">
        <nav>
          <ul>
            <li>
              <a href={`/People/1`}>People</a>
            </li>
            <li>
              <Link to={`/Starships/2`}>Starships</Link>
            </li>
            <li>
              <Link to={`/Planets/2`}>Planets</Link>
            </li>
          </ul>
        </nav>
      </div>
      <div id="detail">
        <Outlet />
      </div>
    </>
  );
}

export default App;
