import { expect } from 'chai';
import { jsdom } from 'jsdom';

import TestUtils from 'inferno-test-utils';

import HelloWorld from '../src/helloworld.jsx';

describe('HelloWorld', () => {
  beforeEach(() => {
    global.document = jsdom('<html><body></body></html>');
  });

  it('「Hello world!!」が表示される', () => {
    const rendered = TestUtils.renderIntoDocument(<HelloWorld />);
    const elem = TestUtils.findRenderedDOMElementWithClass(rendered, 'message');
    expect(elem.innerHTML).to.be.equal('Hello world!!');
  });
});
