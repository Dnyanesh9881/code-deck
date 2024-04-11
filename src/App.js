import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PlayGroundPage from "./Pages/PlayGroundPage/PlayGroundPage";
import HomePage from "./Pages/HomePage/HomePage";
import { PlaygroundProvider } from "./Context/PlaygroundContext/PlaygroundProvider";
import ModalProvider from "./Context/ModalContext/ModalProvider";
function App() {
  return (
    <PlaygroundProvider>
      <ModalProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/playground" element={<PlayGroundPage />} />
        </Routes>
      </BrowserRouter>
      </ModalProvider>
    </PlaygroundProvider>
  );
}

export default App;
