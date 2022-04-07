import { useState } from "react";
import "leaflet/dist/leaflet.css";
import "react-leaflet-markercluster/dist/styles.min.css";
import MarkerClusterGroup from "react-leaflet-markercluster";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { useQuery } from "react-query";
import { bikeIcon, selectedIcon } from "./style";
import ControlMenu from "../../components/ControlMenu/index";
import SideSelection from "../../components/SideSelection";
import StationPopup from "../../components/StationPopup";
import getHeaderSetting from "../../utils/setAuthorizationHeader";

const headerSetting = getHeaderSetting();
const fetchStationData = async (city) => {
    // fetch 20 rows per time (fixed)
    // const top = 20;
    // remove data of previous page
    // const skip = parseInt(top * (+page - 1), 10);
    const res = await fetch(
        `${process.env.REACT_APP_PTX_BASE_URL}Bike/Station/${city}?$format=JSON`,
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

const fetchAvailableBikeData = async (city) => {
    // fetch 20 rows per time (fixed)
    // const top = 20;
    // remove data of previous page
    // const skip = parseInt(top * (+page - 1), 10);
    const res = await fetch(
        `${process.env.REACT_APP_PTX_BASE_URL}Bike/Availability/${city}?$format=JSON`,
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
            ["availableBike"],
            () => fetchAvailableBikeData(selectedCity.value),
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
        ["station"],
        () => fetchStationData(selectedCity.value),
        queryOptions,
    );

    const refetch = () => {
        refetchStationData();
        refetchAvailableBikeData();
    };

    return (
        <div>
            <MapContainer
                center={[25.023, 121.46]}
                zoom={17}
                zoomControl={false}
            >
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url={`${process.env.REACT_APP_MAPBOX_STYLE}tiles/256/{z}/{x}/{y}@2x?access_token=${process.env.REACT_APP_MAPBOX_TOKEN}`}
                />
                <MarkerClusterGroup>
                    {isSuccess &&
                        stationData.map((station) => (
                            <Marker
                                key={station.StationUID}
                                icon={bikeIcon}
                                position={[
                                    station.StationPosition.PositionLat,
                                    station.StationPosition.PositionLon,
                                ]}
                            >
                                <Popup>
                                    <StationPopup
                                        stationData={stationData}
                                        availableBikeData={availableBikeData}
                                    />
                                </Popup>
                            </Marker>
                        ))}
                </MarkerClusterGroup>

                <ControlMenu />
            </MapContainer>
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
