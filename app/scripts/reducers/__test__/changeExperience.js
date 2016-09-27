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
  it('Change users experience', () => {
    expect(userData(testState, actions.changeExperience('newExpereince'))).to.be.eql({
      vacancy: '',
      fullName: '',
      phone: '',
      mail: '',
      education: '',
      experience: 'newExpereince',
      date: '',
    });
  });
});
