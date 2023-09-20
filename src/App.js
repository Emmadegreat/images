import React, { useEffect, useState } from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

import { DndProvider } from "react-dnd";
import Footer from "./components/footer";
import { HTML5Backend } from 'react-dnd-html5-backend';
import Header from "./components/header";
import Home from "./components/home";
import Login from "./components/login";
import { Navigate } from "react-router-dom";
import auth  from './components/firebase';

function App() {

  const [isAuthenticated, setIsAuthenticatede] = useState(false);

  useEffect(() => {

    auth.onAuthStateChanged((user) => {
      if (user) {
        setIsAuthenticatede(true);
      } else {
        setIsAuthenticatede(false);
      }
    })
  }, [])

  return (
    <>
      <Router>
        <DndProvider backend={HTML5Backend}>
          <div className="App">
          <Header/><br />

            <Routes>
              <Route path="/" element={<Home/> } />
              {/*<Route path="/" element={isAuthenticated ?( <Home />):(<Navigate to="/login"/>) }*/} />
            <Route path="/login" element={<Login />} />
          </Routes><br />
          <Footer
            copyright="&copy; HNGX 2023"
            />

        </div>
        </DndProvider>
      </Router>
    </>
  );
}

export default App;
