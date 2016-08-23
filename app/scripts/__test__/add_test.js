import Storage from './../storage';

describe('test storage', () => {
  it('add data', (done) => {
    let storage = new Storage();
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
});
