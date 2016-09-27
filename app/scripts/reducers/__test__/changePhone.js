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
  it('Change users phone', () => {
    expect(userData(testState, actions.changePhone('newPhone'))).to.be.eql({
      vacancy: '',
      fullName: '',
      phone: 'newPhone',
      mail: '',
      education: '',
      experience: '',
      date: '',
    });
  });
});
