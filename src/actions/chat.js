import { chatConstants } from "../constants";
import { reject, success } from "./common";

export const receiveMessage = message => async dispatch => {
  try {
    dispatch(success(message, chatConstants.CHAT_NEW_MESSAGE));
  } catch (e) {
    dispatch(reject(e, chatConstants.CHAT_NEW_MESSAGE_REJECTED));
  }
};
