
export const addData = (index, data) => {
  localStorage.setItem(index.toString(), JSON.stringify(data));
};
// REVIEW: нигде в проекте не используется
export const removeData = index => {
  localStorage.removeItem(index);
};
// REVIEW: нигде в проекте не используется
export const clearAllData = () => {
  localStorage.clear();
};
export const getItem = index => {
  return JSON.parse(localStorage.getItem(localStorage.key(index)));
};
// REVIEW: нигде в проекте не используется
export const setContentItem = (id, newContent) => {
  const obj = JSON.parse(localStorage.getItem(id));
  obj.data = newContent;
  localStorage.setItem(id, JSON.stringify(obj));
};
// REVIEW: нигде в проекте не используется
export const getLengthStorage = () => {
  return localStorage.length;
};
