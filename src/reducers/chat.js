import { chatConstants } from "../constants";

export default function reducer(
  state = {
    messages: [],
  },
  action
) {
  switch (action.type) {
    case chatConstants.CHAT_NEW_MESSAGE: {
      return { ...state, messages: [...state.messages, action.payload] };
    }

    default:
      return { ...state };
  }
}
