import jsdom      from 'jsdom';
import jquery     from 'jquery';
import TestUtils  from 'react-addons-text-utils';
import ReactDOM   from 'react-dom';


//Set up testing environment to run like a browser in the command line
global.document = jsdom.jsdom('<!doctype html><html><body></body></html>');
global.window   = global.document.defaultView;
const $         = jquery(global.window);
//Build 'renderComponent' helper that should render a given react class
function renderComponent (ComponentClass) {
  const renderedComponentInstance = TestUtils.renderIntoDocument(<ComponentClass />);
  return $(ReactDOM.findDOMnode(renderedComponentInstance)); //produces the HTML
}
//Build helper for simulating events
//Set up chai-jquery
