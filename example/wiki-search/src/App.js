import "./App.css";
import Search from "./components/Search";

function App() {
  return (
    <div className="App">
      <header className="ui grid container center aligned">
        <h1 >Wiki Search</h1>
        <div className="ui grid container center aligned">
          <div className="column eight wide">
          <Search />
          </div>
          
        </div>
      </header>
    </div>
  );
}

export default App;
