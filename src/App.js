import React from "react";
import { Route, Routes } from "react-router-dom";
import BookDetails from "./components/bookDetails/BookDetails";
import Browse from "./components/about/About";
import Home from "./components/Home/Home";
import Navbar from "./components/navbar/Navbar";
import { GlobalContext } from "./context/GlobalContext";

const App = () => {
  return (
    <GlobalContext>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/browse" exact element={<Browse />} />
          <Route path="/works/:id" exact element={<BookDetails />} />
        </Routes>
      </div>
    </GlobalContext>
  );
};

export default App;
