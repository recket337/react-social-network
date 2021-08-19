export const required = (value) => {
  if (value) return undefined;
  return 'Field is required';
};

export const maxLengthCreator = (maxLength) => (value) => {
  if (value.length > maxLength) return `max length is ${maxLength} symbs`; //value &&
  return undefined;
};

// export const maxLength50 = (value) => {
//   if (value.length > 50) return 'max length is 50 symbs'; //value &&
//   return undefined;
// };
