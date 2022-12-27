import "./App.css";
import Provider from "./Context/Provider";
import Home from "./pages/Home";

function App() {
  return (
    <Provider>
      <>
        <Home />
      </>
    </Provider>
  );
}

export default App;
