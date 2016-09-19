import * as API from '../API';

describe('test storage', () => {
  it('remove data', () => {
    localStorage.clear();
    API.addData('1', {first: "test 1th"});
    API.addData('2', {second: "test 2nd"});
    API.addData('3', {third: "test 3rd"});
    API.addData('4', {fourth: "test 4th"});
    API.removeData('1');
    expect(localStorage.length).to.be.eql(3);
  });
});
