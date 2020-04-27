import React from "react";
import logo from "./logo.svg";
import "./App.css";

interface MyContextValue {
  data?: string;
}
const MyContext = React.createContext<MyContextValue>({});

class MyComponent extends React.Component {
  static contextType = MyContext;
  declare context: React.ContextType<typeof MyContext>;

  render() {
    return <span>{this.context.data || "No context"}</span>;
  }
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <MyContext.Provider value={{ data: "My Data" }}>
        <MyComponent />
      </MyContext.Provider>
    </div>
  );
}

export default App;
