import React, { useEffect, useState } from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

import { Auth } from "firebase/auth";
import { DndProvider } from "react-dnd";
import Footer from "./components/footer";
import { HTML5Backend } from 'react-dnd-html5-backend';
import Header from "./components/header";
import Home from "./components/home";
import Login from "./components/login";
import { getAuth } from "firebase/auth";

function App() {
  const auth = getAuth();


  return (
    <>
      <Router>
        <DndProvider backend={HTML5Backend}>
          <div className="App">
          <Header/><br />

            <Routes>
              <Route path="/" element={<Login />} />
              <Route path="/login" element={<Login/> } />
            <Route path="/home" element={<Home />} />
          </Routes><br />
          <Footer
              copyright="&copy; EMF  - HNGX"
              year={new Date().getFullYear()}
            />

        </div>
        </DndProvider>
      </Router>
    </>
  );
}

export default App;
