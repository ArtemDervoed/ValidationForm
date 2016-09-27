
export const addData = (index, data) => {
  localStorage.setItem(index.toString(), JSON.stringify(data));
};
