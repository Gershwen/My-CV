import MyCard from "./Components/Card";
import Main from "./Components/Main";
import "./App.css";

function App() {
  return (
    <div className="App">
      {/* React bootstrap CDN */}
      <link
        rel="stylesheet"
        href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css"
        integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3"
        crossorigin="anonymous"
      />

      <MyCard />
      <Main />
    </div>
  );
}

// Credit for CV design:

// https://jonbloomer.com.au/

export default App;
