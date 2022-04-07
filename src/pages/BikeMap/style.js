import L from "leaflet";
import bike from "../../assets/map/bikeL.svg";
import selected from "../../assets/map/selectedL.svg";

// customize leaflet marker icon

export const bikeIcon = new L.Icon({
    iconUrl: bike,
    iconSize: [48, 48],
});

export const selectedIcon = new L.Icon({
    iconUrl: selected,
    iconSize: [48, 48],
});
