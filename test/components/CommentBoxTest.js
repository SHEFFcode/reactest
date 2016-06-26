import { renderComponent, expect } from '../test_helper';
import CommentBox from '../../src/components/CommentBox';

describe('CommentBox', () => {
  let component;
  beforeEach(() => {
    component = renderComponent(CommentBox);
  });
  it('has a correct class', () => {

    expect(component).to.have.class('comment-box');
  });
  it('has a text area', () => {
    expect(component.find('textarea')).to.exist;
  });
  it('has a button', () => {
    expect(component.find('button')).to.exist;
  });

  //since these two tests are closely related, we will nest another describe block in here.
  describe('entering some text into box', () => {
    beforeEach(() => {
      component.find('textarea').simulate('change', 'New Comment');
    });
    it('shows that text in the textarea', () => {
      expect(component.find('textarea')).to.have.value('New Comment');
    });
    it('when submitted clears the input', () => {
      component.simulate('submit');
      expect(component.find('textarea')).to.have.value('');
    });
  });

});
