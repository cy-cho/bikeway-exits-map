import PropTypes from "prop-types";
import {
    Container,
    Card,
    CardHeader,
    CardAddressWrapper,
    AddressIcon,
    Address,
    StatusWrapper,
    LoadingOrErrorText,
} from "./style";
import {
    AvailableTag,
    UnavailableTag,
    SuspendTag,
    FullTag,
    // CategoryTag,
} from "../Tags/index";
import addressIcon from "../../assets/selection/location.svg";

const SERVICE_STATUS = {
    0: "停止營運",
    1: "正常營運",
    2: "暫停營運",
};
const serviceTag = (data, id) => {
    let componentType = null;
    let componentAmount = null;
    const {
        ServiceStatus = 0,
        AvailableRentBikes = 0,
        AvailableReturnBikes = 0,
    } = data.find((station) => station.StationUID === id);

    switch (ServiceStatus) {
        case 0:
            componentType = (
                <SuspendTag>{SERVICE_STATUS[ServiceStatus]}</SuspendTag>
            );
            break;
        case 1:
            componentType = (
                <AvailableTag>{SERVICE_STATUS[ServiceStatus]}</AvailableTag>
            );
            break;
        case 2:
            componentType = (
                <UnavailableTag>{SERVICE_STATUS[ServiceStatus]}</UnavailableTag>
            );
            break;
        default:
            break;
    }

    if (AvailableReturnBikes === 0) {
        componentAmount = <FullTag>車位已滿</FullTag>;
    } else if (AvailableRentBikes === 0) {
        componentAmount = <UnavailableTag>已無單車</UnavailableTag>;
    } else {
        componentAmount = <AvailableTag>尚有單車</AvailableTag>;
    }
    return (
        <>
            {componentType}
            {componentAmount}
        </>
    );
};
function SelectionList({
    availableBikeData,
    stationData,
    isLoading,
    isError,
    isSuccess,
    isFetching,
}) {
    if (isLoading || isFetching) {
        return (
            <Container>
                <LoadingOrErrorText>站位搜尋中...</LoadingOrErrorText>
            </Container>
        );
    }
    if (isError) {
        return (
            <Container>
                <LoadingOrErrorText>該縣市目前尚無站位資訊</LoadingOrErrorText>
            </Container>
        );
    }

    return (
        <Container>
            {isSuccess &&
                stationData.map((item) => (
                    <Card key={item.StationID}>
                        <CardHeader>{item.StationName.Zh_tw}</CardHeader>

                        <CardAddressWrapper>
                            <AddressIcon alt="address" src={addressIcon} />
                            <Address>{item.StationAddress.Zh_tw}</Address>
                        </CardAddressWrapper>
                        <StatusWrapper>
                            {availableBikeData.length > 0 &&
                                serviceTag(availableBikeData, item.StationUID)}
                        </StatusWrapper>
                    </Card>
                ))}
        </Container>
    );
}

SelectionList.propTypes = {
    stationData: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
    availableBikeData: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
    isLoading: PropTypes.bool,
    isError: PropTypes.bool,
    isSuccess: PropTypes.bool,
    isFetching: PropTypes.bool,
};

SelectionList.defaultProps = {
    stationData: [],
    availableBikeData: [],
    isLoading: false,
    isError: false,
    isSuccess: false,
    isFetching: false,
};
export default SelectionList;
