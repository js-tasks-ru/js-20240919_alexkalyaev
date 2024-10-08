/**
 * trimSymbols - removes consecutive identical symbols if they quantity bigger that size
 * @param {string} string - the initial string
 * @param {number} size - the allowed size of consecutive identical symbols
 * @returns {string} - the new string without extra symbols according passed size
 */
export function trimSymbols(string, size) {
  if (size == 0) {
    return '';
  }
  let newStr = '';
  let subStr = '';
  for (let i = 0; i < string.length; i++) {
    if (string[i] == subStr[0] && subStr.length == size) {
      continue;
    } else if (string[i] == subStr[0] && subStr.length < size) {
      subStr += string[i];
    } else if (string[i] != subStr[0]) {
      newStr += subStr;
      subStr = string[i];
    }
    else {return string;}
  }
  newStr += subStr;
  return newStr;
}
