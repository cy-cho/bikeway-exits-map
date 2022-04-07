import { useState } from "react";
import PropTypes from "prop-types";
import { Container } from "./style";
import SearchCard from "../SearchCard/index";
import SelectionList from "../SelectionList/index";
import BottomBar from "../BottomBar/index";

function SideSelection({
    stationData,
    isLoading,
    isError,
    isSuccess,
    isFetching,
    isPreviousData,
    refetch,
    availableBikeData,
    page,
    setPage,
    selectedCity,
    setSelectedCity,
}) {
    const [openSelection, setOpenSelection] = useState(true);
    return openSelection ? (
        <Container>
            <SearchCard
                setOpenSelection={setOpenSelection}
                selectedCity={selectedCity}
                setSelectedCity={setSelectedCity}
                refetch={refetch}
            />
            <SelectionList
                isLoading={isLoading}
                isError={isError}
                isSuccess={isSuccess}
                isFetching={isFetching}
                stationData={stationData}
                availableBikeData={availableBikeData}
            />
            <BottomBar
                setOpenSelection={setOpenSelection}
                page={page}
                setPage={setPage}
                isFetching={isFetching}
                isPreviousData={isPreviousData}
                hasMore={stationData.hasMore}
            />
        </Container>
    ) : (
        <SearchCard />
    );
}

SideSelection.propTypes = {
    availableBikeData: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
    stationData: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
    refetch: PropTypes.func,
    page: PropTypes.number,
    setPage: PropTypes.func,
    isLoading: PropTypes.bool,
    isError: PropTypes.bool,
    isSuccess: PropTypes.bool,
    isFetching: PropTypes.bool,
    isPreviousData: PropTypes.bool,
    selectedCity: PropTypes.oneOfType([PropTypes.object]).isRequired,
    setSelectedCity: PropTypes.func,
};

SideSelection.defaultProps = {
    availableBikeData: [],
    refetch: () => {},
    stationData: [],
    page: 1,
    setPage: () => {},
    isLoading: false,
    isError: false,
    isSuccess: false,
    isFetching: false,
    isPreviousData: false,
    setSelectedCity: () => {},
};

export default SideSelection;
