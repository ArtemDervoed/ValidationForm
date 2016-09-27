import {userData} from '../reducers';
import * as actions from '../../actions/actions';

const testState = {
  vacancy: '',
  fullName: '',
  phone: '',
  mail: '',
  education: '',
  experience: '',
  date: '',
};

describe('reducers', () => {
  it('Change users full name', () => {
    expect(userData(testState, actions.changeFullName('newName'))).to.be.eql({
      vacancy: '',
      fullName: 'newName',
      phone: '',
      mail: '',
      education: '',
      experience: '',
      date: '',
    });
  });
});
