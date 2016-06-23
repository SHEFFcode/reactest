import { renderComponent, expect } from '../test_helper.js';
import CommentList from '../../src/components/CommentList';

describe('CommentList', () => {
  let component;
  beforeEach(() => {
    component = renderComponent(CommentList, null, { comments: ['New Comment', 'Other new comment'] });
  });

  it('shows an li for each comment', () => {
    expect(component.find('li').length).to.equal(2);
  });

  it('shows each comment that is provided', () => {
    expect(component).to.contain('New Comment');
    expect(component).to.contain('Other new comment');
  });
});