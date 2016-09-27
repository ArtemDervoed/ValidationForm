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
  it('Change users mail', () => {
    expect(userData(testState, actions.changeMail('newMail'))).to.be.eql({
      vacancy: '',
      fullName: '',
      phone: '',
      mail: 'newMail',
      education: '',
      experience: '',
      date: '',
    });
  });
});
