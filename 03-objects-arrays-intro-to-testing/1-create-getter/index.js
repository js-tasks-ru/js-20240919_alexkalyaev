/**
 * createGetter - creates function getter which allows select value from object
 * @param {string} path - the strings path separated by dot
 * @returns {function} - function-getter which allow get value from object by set path
 */
export function createGetter(path) {
    path = path.split('.')
    return (obj) => {
        let current = {}
        Object.assign(current, obj)
        current.__proto__ = null
        path.forEach((elem) => {
            if (current == undefined) {
                return
            }
            current = current[elem]
        })
        return current
    }       
}
