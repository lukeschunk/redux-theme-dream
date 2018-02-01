import { ActionTypes } from "./theme-actions";
import { themes, sunset } from "../themes";

const initialState = { theme: sunset };

export default function theme(state = initialState, action) {
  const randomIndex = Math.floor(Math.random() * themes.length);
  switch (action.type) {
    case ActionTypes.RANDOM_THEME:
      return { theme: themes[randomIndex] };
    default:
      return state;
  }
}
