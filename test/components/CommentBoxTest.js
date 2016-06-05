import { renderComponent, expect } from './app_test';
import CommentBox from '../../src/components/CommnetBox';

describe('CommentBox', () => {
  it('has a text area', () => {
    const component = renderComponent(CommentBox);
    expect(component.find('text-area')).to.exist;
  });
  it('has a button', () => {

  });
});