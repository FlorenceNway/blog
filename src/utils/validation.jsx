export const required = (value) => {
  if (value && typeof value === 'string' && value.trim() !== '') {
    return undefined;
  }
  if (value && value.constructor === Array && value.length > 0) {
    return undefined;
  }
  if (value && typeof value === 'number') {
    return undefined;
  }
  return 'Required field';
};
