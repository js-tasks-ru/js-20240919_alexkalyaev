/**
 * pick - Creates an object composed of the picked object properties:
 * @param {object} obj - the source object
 * @param {...string} fields - the properties paths to pick
 * @returns {object} - returns the new object
 */
export const pick = (obj, ...fields) => {
  const array = {};
  for (const [key, value] of Object.entries(obj)) {
    for (let i = 0; i < fields.length; i++) {
      if (fields[i].indexOf(key) > -1) {
        array[key] = value;
      }
    }
  }
  return array;
};
