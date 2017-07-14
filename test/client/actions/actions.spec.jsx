import * as actions from '../../../src/client/actions/index';
import * as actionTypes from '../../../src/client/actions/action-types';

describe('actions', () => {
  it('should create an action to add a todo', () => {
    const expectedAction = {
      type: actionTypes.INC_NUMBER
    };
    expect(actions.incNumber()).to.eql(expectedAction);
  });
});
