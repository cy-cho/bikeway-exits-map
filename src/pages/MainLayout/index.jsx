import { Routes, Route } from "react-router-dom";
import { Container } from "./style";

import Nav from "../../components/Nav/index";
import Home from "../Home/index";
import BikeMap from "../BikeMap/index";
import RouteMap from "../RouteMap/index";

function MainLayout() {
    return (
        <Container>
            <Nav />
            <Routes>
                <Route path="/search-bikes" element={<BikeMap />} />
                <Route path="/search-routes" element={<RouteMap />} />
                <Route path="/" element={<Home />} />
            </Routes>
        </Container>
    );
}

export default MainLayout;
