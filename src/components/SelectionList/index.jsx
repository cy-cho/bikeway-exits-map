import PropTypes from "prop-types";
import {
    Container,
    Card,
    CardHeader,
    CardAddressWrapper,
    AddressIcon,
    Address,
    StatusWrapper,
} from "./style";
import {
    AvailableTag,
    UnavailableTag,
    SuspendTag,
    // FullTag,
    // CategoryTag,
} from "../Tags/index";
import addressIcon from "../../assets/selection/location.svg";

const SERVICE_TYPE = {
    0: "正常營運",
    1: "暫停營運",
    2: "停止營運",
};
function SelectionList({ data }) {
    const serviceTag = (status) => {
        let component = null;
        switch (status) {
            case 0:
                component = <AvailableTag>{SERVICE_TYPE[status]}</AvailableTag>;
                break;
            case 1:
                component = (
                    <UnavailableTag>{SERVICE_TYPE[status]}</UnavailableTag>
                );
                break;
            case 2:
                component = <SuspendTag>{SERVICE_TYPE[status]}</SuspendTag>;
                break;
            default:
                break;
        }
        return component;
    };
    return (
        <Container>
            <Card>
                <CardHeader>iBike1.0_逢甲大學</CardHeader>
                <CardAddressWrapper>
                    <AddressIcon alt="address" src={addressIcon} />
                    <Address>台中市福星路/逢甲路口(潮洋機車停車場)</Address>
                </CardAddressWrapper>
                <StatusWrapper>{serviceTag(1)}</StatusWrapper>
            </Card>
            {data.map((item) => (
                <Card key={item.StationID}>
                    <h5>{item.StationName.Zh_tw}</h5>
                    <CardAddressWrapper>
                        <AddressIcon alt="address" src={addressIcon} />
                        <Address>{item.StationAddress.Zh_tw}</Address>
                    </CardAddressWrapper>
                    <StatusWrapper>
                        {serviceTag(item.ServiceType)}
                    </StatusWrapper>
                </Card>
            ))}
        </Container>
    );
}

SelectionList.propTypes = {
    data: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
};

SelectionList.defaultProps = {
    data: [],
};

export default SelectionList;
