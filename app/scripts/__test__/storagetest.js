import Storage from './../storage';
// REVIEW: предлагаю переписать данные тесты изолированно друг от друга,
// они будут независимы и изменения в одних тестах не поломают другие.
describe('test storage', () => {
  let storage;
  it('create object', (done) => {
    storage = new Storage();
    done();
  });
  it('add data', (done) => {
    storage.addData('1', {first: "test 1th"});
    storage.addData('2', {second: "test 2nd"});
    storage.addData('3', {third: "test 3rd"});
    storage.addData('4', {fourth: "test 4th"});
    if (localStorage.length === 4) {
      done();
    } else {
      throw "don't add";
    }
  });
  it('remove data', (done) => {
    storage.removeData('1');
    if (localStorage.length === 3) {
      done();
    } else {
      throw "don't removed";
    }
  });
  it('claer all storage', (done) => {
    storage.clearAllData();
    if (localStorage.length === 0) {
      done();
    } else {
      throw "don't clear";
    }
  });
});
