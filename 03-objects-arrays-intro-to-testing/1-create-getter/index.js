/**
 * createGetter - creates function getter which allows select value from object
 * @param {string} path - the strings path separated by dot
 * @returns {function} - function-getter which allow get value from object by set path
 */
export function createGetter(path) {
  path = path.split('.');
  return (obj) => {
    let current = obj;        
    for (const elem of path) {
      if (current.hasOwnProperty(elem) === false) {
        return;
      }
      current = current[elem];            
    }
    return current;
  };       
}