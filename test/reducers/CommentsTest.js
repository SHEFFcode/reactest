import { expect } from '../test_helper';
import commentReducer from '../../src/reducers/Comments';
import { SAVE_COMMENT } from '../../src/actions/types';

describe("Comments Reducer", () => {
  it('handles action with unkown type', () => {
    expect(commentReducer(undefined, {})).to.be.instanceOf(Array);
  });
  it('handles action of type SAVE_COMMENT', () => {
    const action = { type: SAVE_COMMENT, payload: 'New Comment' };
    expect(commentReducer([], action)).to.eql(['New Comment']);
  });
});