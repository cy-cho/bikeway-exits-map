import PropTypes from "prop-types";
import { Container, AmountWrapper, AmountCard } from "./style";

function StationPopup({ stationData, availableBikeData }) {
    const { StationName, StationAddress, UpdateTime } = stationData;
    const {
        AvailableRentBikes,
        AvailableReturnBikes,
        ServiceStatus,
        ServiceType,
    } = availableBikeData;
    return (
        <Container>
            <h5>{StationName?.Zh_tw}</h5>
            <AmountWrapper>
                <AmountCard>{AvailableRentBikes}</AmountCard>
                <AmountCard>{AvailableReturnBikes}</AmountCard>
            </AmountWrapper>
        </Container>
    );
}

StationPopup.propTypes = {
    stationData: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
    availableBikeData: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
};
StationPopup.defaultProps = {
    stationData: [],
    availableBikeData: [],
};

export default StationPopup;
