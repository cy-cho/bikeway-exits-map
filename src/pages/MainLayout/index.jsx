import { Routes, Route } from "react-router-dom";
import { Container } from "./style";

import Nav from "../../components/Nav/index";
import Home from "../Home/index";
import Map from "../Map/index";

function MainLayout() {
  return (
    <Container>
      <Nav />
      <Routes>
        <Route path="/map" element={<Map />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </Container>
  );
}

export default MainLayout;
