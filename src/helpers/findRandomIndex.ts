export const findRandomArrayIndex = <T>(array: T[]) => {
  return Math.floor(Math.random() * array.length);
};
