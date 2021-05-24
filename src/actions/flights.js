import { flightsConstants } from "../constants";
import { reject, success } from "./common";

export const receivePosition = position => async dispatch => {
  try {
    dispatch(success(position, flightsConstants.FLIGHTS_NEW_POSITION));
  } catch (e) {
    dispatch(reject(e, flightsConstants.FLIGHTS_NEW_POSITION_REJECTED));
  }
};

export const receiveFlights = position => async dispatch => {
  try {
    dispatch(success(position, flightsConstants.FLIGHTS_FULFILLED));
  } catch (e) {
    dispatch(reject(e, flightsConstants.FLIGHTS_REJECTED));
  }
};
