import React from "react";
import TodoProvider from "./context/Todo";
import ThemeProvider from "./context/Theme";
import ThemeMode from "./components/ThemeMode/ThemeMode";
import Statistics from "./components/Statistics/Statistics";
import List from "./components/List/List";
import "./App.scss";

const App = () => {
  return (
    <ThemeProvider>
      <TodoProvider>
        <ThemeMode />
        <Statistics />
        <List />
      </TodoProvider>
    </ThemeProvider>
  )
}

export default App;
