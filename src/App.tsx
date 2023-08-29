import React from 'react';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import MainLayout from "./components/layout/MainLayout";
import HomePage from "./pages/home/HomePage";

const App = () => {
  return (
      <BrowserRouter>
          <Routes>
              <Route path={"/"} element={<MainLayout/>}>
                  <Route index element={<HomePage/>}/>
              </Route>
          </Routes>
      </BrowserRouter>
  );
}

export default App;
