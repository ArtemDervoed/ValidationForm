import * as API from '../API';

describe('test storage', () => {
  it('add data', () => {
    API.addData('1', {first: "test 1th"});
    API.addData('2', {second: "test 2nd"});
    API.addData('3', {third: "test 3rd"});
    API.addData('4', {fourth: "test 4th"});
    expect(localStorage.length).to.be.eql(4);
  });
});
