import "./App.css";

function App() {
  return (
    <>
      <div id="sidebar">
        <h1>React Router Contacts</h1>

        <nav>
          <ul>
            <li>
              <a href={`/People/1`}>People</a>
            </li>
            <li>
              <a href={`/Starships/2`}>Starships</a>
            </li>
            <li>
              <a href={`/Planets/2`}>Planets</a>
            </li>
          </ul>
        </nav>
      </div>
      <div id="detail"></div>
    </>
  );
}

export default App;
