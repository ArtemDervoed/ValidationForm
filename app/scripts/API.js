
export const addData = (index, data) => {
  localStorage.setItem(index.toString(), JSON.stringify(data));
};
export const removeData = index => {
  localStorage.removeItem(index);
};
export const clearAllData = () => {
  localStorage.clear();
};
export const getItem = index => {
  return JSON.parse(localStorage.getItem(localStorage.key(index)));
};
export const setContentItem = (id, newContent) => {
  const obj = JSON.parse(localStorage.getItem(id));
  obj.data = newContent;
  localStorage.setItem(id, JSON.stringify(obj));
};
export const getLengthStorage = () => {
  return localStorage.length;
};
