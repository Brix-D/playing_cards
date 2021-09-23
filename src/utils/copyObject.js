/**
 * Создает глубокую копию объекта
 * @param object {Object} Исходный объект
 * @returns {Object} Копия объекта
 */
export function copyObject(object) {
  return JSON.parse(JSON.stringify(object));
}

export default copyObject;