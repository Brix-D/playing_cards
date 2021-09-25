/**
 * Случайным образом выбирает элемент массива
 * @param arr {Array} Исходный массив
 * @returns {any} Выбранный элемент
 */
export function randomChoice(arr) {
  return arr[Math.floor(arr.length * Math.random())];
}

export default randomChoice;