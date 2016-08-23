import Storage from './../storage';

describe('test storage', () => {
  it('remove data', (done) => {
    localStorage.clear();
    let storage = new Storage();
    storage.addData('1', {first: "test 1th"});
    storage.addData('2', {second: "test 2nd"});
    storage.addData('3', {third: "test 3rd"});
    storage.addData('4', {fourth: "test 4th"});
    storage.removeData('1');
    if (localStorage.length === 3) {
      done();
    } else {
      throw "don't removed";
    }
  });
});
