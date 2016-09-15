import Storage from './../storage';

describe('test storage', () => {
  it('claer all storage', () => {
    localStorage.clear();
    const storage = new Storage();
    storage.addData('1', {first: "test 1th"});
    storage.addData('2', {second: "test 2nd"});
    storage.addData('3', {third: "test 3rd"});
    storage.addData('4', {fourth: "test 4th"});
    storage.clearAllData();
    expect(localStorage.length).to.be.eql(0);
  });
});
