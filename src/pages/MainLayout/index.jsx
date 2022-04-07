import { Routes, Route } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "react-query";
import { Container } from "./style";

import Nav from "../../components/Nav/index";
import Home from "../Home/index";
import BikeMap from "../BikeMap/index";
import RouteMap from "../RouteMap/index";

const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            refetchInterval: false,
            refetchOnWindowFocus: false,
            refetchOnReconnect: false,
        },
    },
});
function MainLayout() {
    return (
        <Container>
            <QueryClientProvider client={queryClient}>
                <Nav />
                <Routes>
                    <Route path="/search-bikes" element={<BikeMap />} />
                    <Route path="/search-routes" element={<RouteMap />} />
                    <Route path="/" element={<Home />} />
                </Routes>
            </QueryClientProvider>
        </Container>
    );
}

export default MainLayout;
