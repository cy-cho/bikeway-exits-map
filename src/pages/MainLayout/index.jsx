import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import { Container } from "./style";

import Nav from "../../components/Nav/index";
import Home from "../Home/index";
import Map from "../Map/index";

function MainLayout() {
  const [searchMode, setSearchMode] = useState("");
  return (
    <Container>
      <Nav searchMode={searchMode} setSearchMode={setSearchMode} />
      <Routes>
        <Route path="/map" element={<Map />} />
        <Route path="/" element={<Home searchMode={searchMode} />} />
      </Routes>
    </Container>
  );
}

export default MainLayout;
