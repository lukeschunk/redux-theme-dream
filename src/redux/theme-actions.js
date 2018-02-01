export const ActionTypes = {
  RANDOM_THEME: "RANDOM_THEME"
};

export function getRandomTheme() {
  return { type: ActionTypes.RANDOM_THEME };
}
