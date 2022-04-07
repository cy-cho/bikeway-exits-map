import PropTypes from "prop-types";
import {
    Container,
    PaginationWrapper,
    Pagination,
    CurrentPage,
    Icon,
    ShowMapButtonWrapper,
} from "./style";
import { AvailableTag } from "../Tags";

import downIcon from "../../assets/dropdown/down.svg";

function BottomBar({
    setOpenSelection,
    page,
    setPage,
    isPreviousData,
    isFetching,
}) {
    const onClickPreviousPage = () => {
        if (page === 1) {
            return;
        }
        setPage((old) => Math.max(old - 1, 0));
    };

    const onClickNextPage = () => {
        // cannot go next page if now is fetching data or is previous data
        if (isFetching || isPreviousData) {
            return;
        }
        setPage((old) => old + 1);
    };
    return (
        <Container>
            <PaginationWrapper>
                <Icon
                    alt="prev"
                    type="prev"
                    src={downIcon}
                    onClick={onClickPreviousPage}
                />
                <Pagination>
                    <CurrentPage>{page}</CurrentPage>
                </Pagination>
                <Icon
                    alt="next"
                    type="next"
                    src={downIcon}
                    onClick={onClickNextPage}
                />
            </PaginationWrapper>
            <ShowMapButtonWrapper onClick={() => setOpenSelection(false)}>
                <AvailableTag>顯示地圖</AvailableTag>
            </ShowMapButtonWrapper>
        </Container>
    );
}
BottomBar.propTypes = {
    setOpenSelection: PropTypes.func,
    page: PropTypes.number,
    setPage: PropTypes.func,
    isFetching: PropTypes.bool,
    isPreviousData: PropTypes.bool,
};

BottomBar.defaultProps = {
    setOpenSelection: () => {},
    page: 1,
    setPage: () => {},
    isFetching: false,
    isPreviousData: false,
};

export default BottomBar;
