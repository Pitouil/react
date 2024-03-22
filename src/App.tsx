// import { useState } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.scss'
import {Home} from "./pages/Home.tsx";
import {Pendu} from "./pages/Pendu.tsx";
import {Header} from "./components/Header.tsx";


export const App = () => {
  // const [count, setCount] = useState(0)

  return (
      <BrowserRouter>
          <Routes>
              <Route path="/" element={<Header />}>
                  <Route index element={<Home />} />
                  <Route path="game" element={<Pendu />} />
              </Route>
          </Routes>
      </BrowserRouter>
  )
}

