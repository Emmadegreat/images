import React, { useEffect, useState } from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

import { Auth } from "firebase/auth";
import { DndProvider } from "react-dnd";
import Footer from "./components/footer";
import { HTML5Backend } from 'react-dnd-html5-backend';
import Header from "./components/header";
import Home from "./components/home";
import Login from "./components/login";
import { Navigate } from "react-router-dom";
import { getAuth } from "firebase/auth";

//import  useAuth   from './components/firebase';

function App() {
  const auth = getAuth();

  const [isAuthenticated, setIsAuthenticatede] = useState(false);
  //const Auth = useAuth();



  useEffect(() => {

    auth.onAuthStateChanged((user) => {
      if (user) {
        setIsAuthenticatede(true);
      } else {
        setIsAuthenticatede(false);
      }
    })
  }, [auth])

  return (
    <>
      <Router>
        <DndProvider backend={HTML5Backend}>
          <div className="App">
          <Header/><br />

            <Routes>
              {/*<Route path="/" element={<Home/> } />*/}
              <Route path="/" element={ isAuthenticated ? <Home />: <Login /> } />
            <Route path="/login" element={<Login />} />
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
