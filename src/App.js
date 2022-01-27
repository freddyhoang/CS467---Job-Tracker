import './App.css';
import { React } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import Jobs from "./pages/Jobs";
import Contacts from "./pages/Contacts";
import NoPage from "./pages/NoPage";
import Summary from "./pages/Summary";

function App() {
    return (
        <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="jobs" element={<Jobs />} />
            <Route path="contacts" element={<Contacts />} />
            <Route path="summary" element={<Summary />} />
            <Route path="*" element={<NoPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    );
  }

export default App;