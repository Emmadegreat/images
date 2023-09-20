import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

import { DndProvider } from "react-dnd";
import DragDrop from "./components/DragDrop";
import Footer from "./components/footer";
import { HTML5Backend } from 'react-dnd-html5-backend';
import Header from "./components/header";
import Home from "./components/pages/home";
import Login from "./components/login";
import { Navigate } from "react-router-dom";
import React from "react";
import ReactDOM from 'react-dom';
import { auth } from './components/firebase';

//import { useAuth0 } from "@auth0/auth0-react";

function App() {

  //const { isAuthenticated } = useAuth0();
  //if (isLoading) {
    //return <div>...isLoading</div>
  //}

  return (
    <>
      <Router>
        <DndProvider backend={HTML5Backend}>
          <div className="App">
          <Header/><br />

            <Routes>
              {/*<Route path="/" element={<DragDrop/> } />*/}
              <Route path="/" element={ <DragDrop /> } />
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
