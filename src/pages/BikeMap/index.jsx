import { useState } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { useQuery } from "react-query";

import ControlMenu from "../../components/ControlMenu/index";
import SideSelection from "../../components/SideSelection";
import getHeaderSetting from "../../utils/setAuthorizationHeader";

const headerSetting = getHeaderSetting();
const fetchStationData = async (page, city) => {
    // fetch 20 rows per time (fixed)
    const top = 20;
    // remove data of previous page
    const skip = parseInt(top * (+page - 1), 10);
    const res = await fetch(
        `${process.env.REACT_APP_PTX_BASE_URL}Bike/Station/${city}?$top=${top}&$skip=${skip}&$format=JSON`,
        {
            method: "GET",
            headers: headerSetting,
        },
    );

    if (!res.ok) {
        throw new Error("no ok!");
    }
    return res.json();
};

const fetchAvailableBikeData = async (page, city) => {
    // fetch 20 rows per time (fixed)
    const top = 20;
    // remove data of previous page
    const skip = parseInt(top * (+page - 1), 10);
    const res = await fetch(
        `${process.env.REACT_APP_PTX_BASE_URL}Bike/Availability/${city}?$top=${top}&$skip=${skip}&$format=JSON`,
        {
            method: "GET",
            headers: headerSetting,
        },
    );

    if (!res.ok) {
        throw new Error("no ok!");
    }
    return res.json();
};
const queryOptions = {
    useErrorBoundary: (error) => error.response?.status >= 400,
    keepPreviousData: true,
    staleTime: 5000,
    retry: 2,
};
function BikeMap() {
    const [page, setPage] = useState(1);
    const [selectedCity, setSelectedCity] = useState({
        text: "新北市",
        value: "NewTaipei",
    });

    const { data: availableBikeData = [], refetch: refetchAvailableBikeData } =
        useQuery(
            // key and other dependencies
            ["availableBike", page],
            () => fetchAvailableBikeData(page, selectedCity.value),
            queryOptions,
        );

    const {
        isLoading,
        isError,
        isSuccess,
        data: stationData = [],
        // error,
        isFetching,
        isPreviousData,
        refetch: refetchStationData,
    } = useQuery(
        // key and other dependencies
        ["station", page],
        () => fetchStationData(page, selectedCity.value),
        queryOptions,
    );

    const refetch = () => {
        refetchStationData();
        refetchAvailableBikeData();
    };

    return (
        <div>
            <MapContainer center={[25.023, 121.46]} zoom={17}>
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url={`${process.env.REACT_APP_MAPBOX_STYLE}tiles/256/{z}/{x}/{y}@2x?access_token=${process.env.REACT_APP_MAPBOX_TOKEN}`}
                />
                <Marker position={[51.505, -0.09]}>
                    <Popup>
                        A pretty CSS3 popup. <br /> Easily customizable.
                    </Popup>
                </Marker>
            </MapContainer>
            <ControlMenu />
            <SideSelection
                isLoading={isLoading}
                isError={isError}
                isSuccess={isSuccess}
                // error={error}
                isFetching={isFetching}
                isPreviousData={isPreviousData}
                refetch={refetch}
                stationData={stationData}
                availableBikeData={availableBikeData}
                page={page}
                setPage={setPage}
                selectedCity={selectedCity}
                setSelectedCity={setSelectedCity}
            />
        </div>
    );
}

export default BikeMap;
