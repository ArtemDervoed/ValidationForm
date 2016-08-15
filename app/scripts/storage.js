export default class Storage {
  addData(index, data) {
    localStorage.setItem(index.toString(), JSON.stringify(data));
  }
  removeData(index) {
    localStorage.removeItem(index);
  }
  clearAllData() {
    localStorage.clear();
  }
  getItem(index) {
    return JSON.parse(localStorage.getItem(localStorage.key(index)));
  }
  setContentItem(id, newContent) {
    const obj = JSON.parse(localStorage.getItem(id));
    obj.data = newContent;
    localStorage.setItem(id, JSON.stringify(obj));
  }
  getLengthStorage() {
    return localStorage.length;
  }
  getAllStorage() {
    const storage = [];
    for (let i = 0; i < localStorage.length; i++) {
      storage.push(JSON.parse(localStorage.getItem(localStorage.key(i))));
    }
    return storage;
  }
}
