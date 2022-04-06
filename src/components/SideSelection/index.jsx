import { useState } from "react";
import { Container } from "./style";
import SearchCard from "../SearchCard/index";
import SelectionList from "../SelectionList/index";
import BottomBar from "../BottomBar/index";

function SideSelection() {
    const [openSelection, setOpenSelection] = useState(true);
    return openSelection ? (
        <Container>
            <SearchCard />
            <SelectionList />
            <BottomBar setOpenSelection={setOpenSelection} />
        </Container>
    ) : (
        <SearchCard />
    );
}

export default SideSelection;
