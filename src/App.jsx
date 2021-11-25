import React from "react";
import "./App.css";
import { Balance } from "./components/Balance";
import { Header } from "./components/Header";
import { IncomeExpenses } from "./components/IncomeExpenses";
import { TransctionList } from "./components/TransctionList";
import { AddTranscton } from "./components/AddTranscton";

import { GlobalProvider } from "./context/GlobelState";

const App = () => {
  return (
    <div>
      <GlobalProvider>
        <Header />
        <div className="container">
          <Balance />
          <IncomeExpenses />
          <TransctionList />
          <AddTranscton />
        </div>
      </GlobalProvider>
    </div>
  );
};

export default App;
