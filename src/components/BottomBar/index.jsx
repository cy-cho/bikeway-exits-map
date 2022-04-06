import PropTypes from "prop-types";
import {
    Container,
    PaginationWrapper,
    Icon,
    ShowMapButtonWrapper,
} from "./style";
import { AvailableTag } from "../Tags";

import downIcon from "../../assets/dropdown/down.svg";

function BottomBar({ setOpenSelection }) {
    return (
        <Container>
            <PaginationWrapper>
                <Icon alt="prev" type="prev" src={downIcon} />
                <Icon alt="next" type="next" src={downIcon} />
            </PaginationWrapper>
            <ShowMapButtonWrapper onClick={() => setOpenSelection(false)}>
                <AvailableTag>顯示地圖</AvailableTag>
            </ShowMapButtonWrapper>
        </Container>
    );
}
BottomBar.propTypes = {
    setOpenSelection: PropTypes.func,
};

BottomBar.defaultProps = {
    setOpenSelection: () => {},
};

export default BottomBar;
