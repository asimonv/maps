import { flightsConstants } from "../constants";

export default function reducer(
  state = {
    positions: new Map(),
    flights: [],
  },
  action
) {
  switch (action.type) {
    case flightsConstants.FLIGHTS_NEW_POSITION: {
      const {
        payload: { code, position },
      } = action;
      const updatedPositions = new Map(state.positions);
      updatedPositions.set(code, position);
      return { ...state, positions: updatedPositions };
    }

    case flightsConstants.FLIGHTS_FULFILLED: {
      return {
        ...state,
        flights: action.payload.map(x => ({
          ...x,
          color: `#${Math.floor(Math.random() * 16777215).toString(16)}`,
        })),
      };
    }

    default:
      return { ...state };
  }
}
