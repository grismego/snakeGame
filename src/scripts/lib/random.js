export const generateRandomNumber = (min, max) => (
  Math.floor(min + Math.random() * (max - min + 1))
);

export const generateRandomTenNumber = (min, max) => {
  return Math.ceil((Math.random() * (max-min) + min) / 40) * 40;
};
