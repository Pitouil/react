// import { useState } from 'react'
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.scss'
import {Home} from "./pages/Home.tsx";
import {Game} from "./pages/Game.tsx";
import {Header} from "./components/Header.tsx";


export const App = () => {
  // const [count, setCount] = useState(0)

  return (
      <BrowserRouter>
          <Routes>
              <Route path="/" element={<Header />}>
                  <Route index element={<Home />} />
                  <Route path="game" element={<Game />} />
              </Route>
          </Routes>
      </BrowserRouter>
  )
}

// @ts-ignore
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);

