import * as API from '../API';

describe('storage', () => {
  it('add data in API', () => {
    API.addData('1', {first: "test 1th"});
    API.addData('2', {second: "test 2nd"});
    API.addData('3', {third: "test 3rd"});
    API.addData('4', {fourth: "test 4th"});
    expect(localStorage.length).to.be.eql(4);
  });
});
