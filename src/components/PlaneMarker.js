import L from "leaflet";
import planeImg from "../img/plane-2.svg";

const planeIcon = new L.Icon({
  iconUrl: planeImg,
  iconRetinaUrl: planeImg,
  iconAnchor: null,
  popupAnchor: null,
  shadowUrl: null,
  shadowSize: null,
  shadowAnchor: null,
  iconSize: new L.Point(60, 60),
  className: "leaflet-div-icon",
});

export { planeIcon };
